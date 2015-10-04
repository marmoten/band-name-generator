var express = require("express");
var app = express();
app.use(express.static(__dirname + "/app/"));
var port = process.env.PORT || 3000;

function Adjective() {
  this.angry = true;
  this.plain = true;
  this.maniacal = true;
  this.joyous = true;
  this.lazy = true;
}

function Verb() {
  this.chafing = true;
  this.eating = true;
  this.frowning = true;
  this.hanging = true;
  this.knowing = true;
}

function Noun() {
  this.growlers = true;
  this.decanters = true;
  this.asparagus = true;
  this.popcorn = true;
  this.bacon = true;
}

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

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

app.get("/verb", function (req, res) {
  res.json(getRandomWord(verb));
});

app.get("/noun", function (req, res) {
  res.json(getRandomWord(noun));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});


