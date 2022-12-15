import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  author: String,
});

export default mongoose.model('Book', bookSchema);
