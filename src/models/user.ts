import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
});

export const userData = mongoose.model('User', userSchema);
