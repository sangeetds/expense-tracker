require("dotenv").config();

const mongoose = require("mongoose");
const connect = process.env.MONGO_URL;

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
};

module.exports = connectDB;
