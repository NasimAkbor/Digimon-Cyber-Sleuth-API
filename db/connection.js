//Necessary imports
import mongoose from "mongoose";

//Provide link/environment for database to be accessed at
const MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/digimon-api";

mongoose.set("returnOriginal", false);

//Link mongoose to mongoDB, allow for error message
mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

//Alert user when disconnected
mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

//Alert user of error
mongoose.connection.on("error", (error) =>
  console.error()`MongoDB connection error: ${error}`);

export default mongoose.connection;