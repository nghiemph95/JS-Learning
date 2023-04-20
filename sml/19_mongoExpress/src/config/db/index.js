import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongoDB_learning');
    console.log('connect ok');
  } catch (error) {
    console.log('connect fail');
  }
}
