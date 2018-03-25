import mongoose from 'mongoose';

const entry = mongoose.Schema({
  etymology: String,
  pronunciation: String,
  definition: String,
  author: String,
  createAt: Date
});

export default mongoose.model('Entry', entry);
