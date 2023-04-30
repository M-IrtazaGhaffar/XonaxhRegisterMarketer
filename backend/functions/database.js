const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connection = async () => {
  try {
    // Connect MongoDB at default port 27017.
    mongoose.connect(
    //   "mongodb+srv://irtaza:IrtazaGhaffar2003@cluster0.7egyadb.mongodb.net/XonaxhUsers?retryWrites=true&w=majority"
    "mongodb://irtaza:IrtazaGhaffar2003@ac-1bgmek9-shard-00-00.7egyadb.mongodb.net:27017,ac-1bgmek9-shard-00-01.7egyadb.mongodb.net:27017,ac-1bgmek9-shard-00-02.7egyadb.mongodb.net:27017/XonaxhUsers?ssl=true&replicaSet=atlas-rt9o3g-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("MongoDB Connection Succeeded.");
  } catch (error) {
    console.log("Error in DB connection: " + error);
  }
};

module.exports = connection;
