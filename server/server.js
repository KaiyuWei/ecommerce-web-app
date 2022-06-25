// this file is the enter point of the server
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require("fs");
require('dotenv').config()

// app
const app = express()  // object for handling the HTTP requests

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true,  //not supported anymore, Mongoose 6 always behaves as if useCreateIndex is true
    // useFindAndModify: true  // not supported anymore, Mongoose 6 always behaves as if useFindAndModify is false
})
.then(() => console.log('DB CONNECTED!'))
.catch((err) => console.log('DB CONNECTION ERR: ', err))

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "2mb"}));
app.use(cors());
// routes middleware
fs.readdirSync("./routes").map((r) => 
    app.use("/api", require("./routes/" + r))
);

// port 
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

