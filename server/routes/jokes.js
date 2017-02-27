var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var userObject = {};

 var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  },
];


router.get('/', function(req, res){
  res.send(JSON.stringify(jokes));
});

router.post('/sendJoke', function(req, res){
  userObject = req.body;
  jokes.push(userObject);
});

router.get('/getJoke', function(req, res){
  res.send(JSON.stringify(jokes));
});
module.exports = router;
