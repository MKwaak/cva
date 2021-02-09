const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const whitelist = ["http://localhost:3000", "https://creatingvalue.co"];

// Middleware
app.use(express.json());

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(whitelist.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/subscribe", require("./routes/subscribe"));

module.exports = app;
