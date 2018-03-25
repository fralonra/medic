import mongoose from 'mongoose';

const language = mongoose.Schema({
  name: String,
  abbr: String
});

export default mongoose.model('Lang', language);
