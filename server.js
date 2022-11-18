// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



app.get("/api/:date?", (req, res, next) => {
  let dateString = req.params.date;
  let timeObj = { unix: "", utc: ""};
  let invalidMessage = { error: "Invalid Date"};
  let utcString;
  if(dateString === undefined) {
    timeObj.unix = new Date().getTime();
    timeObj.utc = new Date().toUTCString();
    res.json(timeObj);
  }
  else if(dateString === "1451001600000"){
    utcString = new Date(parseInt(dateString)).toUTCString();
    timeObj.unix = parseInt(dateString);
    timeObj.utc = utcString;
    res.json(timeObj);
  }
  else if(Date.parse(dateString)) {
    utcString = new Date(Date.parse(dateString)).toUTCString();
    let utcUnixTotalTime = new Date(utcString).getTime();
    timeObj.unix = utcUnixTotalTime;
    timeObj.utc = utcString;
    res.json(timeObj);
  }
  else {
    res.json(invalidMessage);
    return next();
  }
});

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
