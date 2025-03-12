import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Number: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  Username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default mongoose.model('User', UserSchema);
