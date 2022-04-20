import mongoose from "mongoose";


const CONNECTION_URL =
  'mongodb+srv://zakk123:zakk123@memories0.dcihx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected..');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB