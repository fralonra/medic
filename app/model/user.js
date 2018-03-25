import mongoose from 'mongoose';

const user = mongoose.Schema({
  id: Number,
  name: String,
  nickname: String,
  group: Number,
  lastLogin: Date,
  pwHash: String
});

export default mongoose.model('User', user);
