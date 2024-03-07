import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = await MongoMemoryServer.create();

export const dbConnect = async () => {
  const uri = mongod.getUri();

  await mongoose.connect(uri);
};

export const dbDisconnect = async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
  await mongod.stop();
};

export const dbClear = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany();
  }
};
