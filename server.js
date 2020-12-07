const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const transactions = require('./routes/transcations');

const app = express();

app.use(express.json());

app.use("/api/v1/transcations", transactions);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.listen(PORT, (req, res) => {
    console.log("listening...");
});

connectDB();
