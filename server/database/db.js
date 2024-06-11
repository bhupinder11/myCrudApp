import mongoose from "mongoose";

const Connection = async() => {

const URL = `mongodb://bhupinder64:Developer@ac-hwb5yxp-shard-00-00.yi6yr59.mongodb.net:27017,ac-hwb5yxp-shard-00-01.yi6yr59.mongodb.net:27017,ac-hwb5yxp-shard-00-02.yi6yr59.mongodb.net:27017/?ssl=true&replicaSet=atlas-84aqde-shard-0&authSource=admin&retryWrites=true&w=majority&appName=new-crud-app` ;

  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;