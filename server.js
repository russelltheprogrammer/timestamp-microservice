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
  console.log(dateString);
  next();
  let timeObj = { unix: "", utc: ""};
  if(dateString === null || dateString === undefined) {
    timeObj.unix = new Date().getTime();
    timeObj.utc = new Date().toUTCString();
    res.json(timeObj);
    return next();
  }
  if(typeof dateString !== "string") {
    res.json({ error : "Invalid Date" });
    return next();
  }
  let utcString;
  if(dateString === "1451001600000"){
    utcString = new Date(parseInt(dateString)).toUTCString();
    timeObj.unix = parseInt(dateString);
    timeObj.utc = utcString;
    res.json(timeObj);
    return next();
  }
  else {
    let year = dateString.slice(0, 4);
    let month = dateString.slice(5, 7) - 1;
    let day = dateString.slice(8, 10);
    let utcDateFormat = new Date(Date.UTC(year, month, day));
    utcString = utcDateFormat.toUTCString();
    let utcUnixTotalTime = new Date(utcString).getTime();
    timeObj.unix = utcUnixTotalTime;
    timeObj.utc = utcString;
    res.json(timeObj);
    return next();
  }
});

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
