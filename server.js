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

app.get("/api/:date?", (req, res) => {
  let dateString = req.params.date;
  let year = dateString.slice(0, 4);
  let month = dateString.slice(5, 7) - 1;
  let day = dateString.slice(8, 10);
  console.log(dateString);
  if(dateString === undefined){
    res.json({ error : "Invalid Date" });
  }
  res.json({ unix : new Date(year, month, day).getMilliseconds()});

  //convert to Unix
//   let dateToUnix = Date.parse(req).getTime()/1000;
//   //convert to Utc
//   let dateToUtc = new Date(req * 1000);
//   res.json({ unix: dateToUnix });
//   res.json({ utc: dateToUtc});
});

 

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
