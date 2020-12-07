const mongoose = require('mongoose');
const connect = "mongodb+srv://sangeetds:sangeetds@expensetraceker.pknf2.mongodb.net/ExpenseTraceker?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connect, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB connected");

  } catch (err) {
    console.log(Error);
    process.exit(1);
  }
}

module.exports = connectDB;
