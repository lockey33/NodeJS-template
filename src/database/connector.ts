import "dotenv/config";
import mongoose from "mongoose";

let database: typeof mongoose;

(async () => {
  await mongoose.connect(`mongodb://localhost:${process.env.MONGO_PORT}/${process.env.DATABASE}`, {}, () => {
    console.log("Mongo database connected (mongoose connector)");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error during mongoose connection :", error);
  });
  database = mongoose;
})();

const databaseInstance = () => database;

export default databaseInstance;
