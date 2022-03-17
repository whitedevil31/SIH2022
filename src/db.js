const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_DB)
    const connect = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
    
      autoIndex: true,

      useUnifiedTopology: true,
    });
    console.log(`DB connected to : ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
