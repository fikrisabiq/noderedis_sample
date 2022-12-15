import mongoose from 'mongoose';
import redis from 'redis';

(async () => {
  const client = redis.createClient({
    host: '192.168.56.54',
    port: 6379,
    retry_strategy: () => 1000,
  });

  const client2 = redis.createClient({
    host: '192.168.56.55',
    port: 6379,
    retry_strategy: () => 1000,
  });

  await client.connect();
  await client2.connect();
  console.log('Redis connected');

  const exec = mongoose.Query.prototype.exec;

  mongoose.Query.prototype.cache = function (options = { time: 60 }) {
    this.useCache = true;
    this.time = 60;
    this.hashKey = JSON.stringify(this.mongooseCollection.name);
    console.log(this.time);

    return this;
  };

  mongoose.Query.prototype.exec = async function () {
    if (!this.useCache) {
      return await exec.apply(this, arguments);
    }

    const key = 'bookCache';

    const cacheValue = await client2.HGET(this.hashKey, key);

    if (cacheValue) {
      const doc = JSON.parse(cacheValue);

      console.log('Response from Redis');
      return Array.isArray(doc)
        ? doc.map((d) => new this.model(d))
        : new this.model(doc);
    }

    const result = await exec.apply(this, arguments);
    console.log(this.time);
    client.HSET(this.hashKey, key, JSON.stringify(result));
    client.expire(this.hashKey, this.time);

    console.log('Response from MongoDB');
    return result;
  };

  const clearKey = (hashKey) => {
    client.del(JSON.stringify(hashKey));
  };
})();

export { clearKey };
