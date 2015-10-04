var express = require("express");
var app = express();
app.use(express.static(__dirname + "/app/"));
var port = process.env.PORT || 3000;

function Adjective() {
  this.funny = true;
  this.sad = true;
  this.creepy = true;
  this.friendly = true;
  this.hesitant = true;
}

var adjective = new Adjective();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

app.get("/", function (req, res) {
  res.sendFile('index.html');
});

app.get("/adjective", function (req, res) {
  res.json(getRandomWord(adjective));
});


app.listen(port, function() {
  console.log('server started on port ' + port);
});


