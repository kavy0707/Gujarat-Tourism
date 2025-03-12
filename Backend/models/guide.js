import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phonenumber: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  experience: { type: Number, required: true },
  bio: { type: String, required: true },
  language: { type: String, required: true }
},
  { collection: 'localguides' });

export default mongoose.model('Guide', guideSchema);
