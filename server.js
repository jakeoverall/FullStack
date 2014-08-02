var express = require('express');
var bodyParser = require('body-parser');
var data = require('./server-assets/myData');
var fs = require('fs');
var app = express();


app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/family', function (req, res) {
    var family = data.getFamily();
    res.status(200).send(family);
});


app.get('/friends', function (req, res) {
    var friends = data.getFriends();
    res.status(200).send(friends);
});

app.get('/me', function (req, res) {
    var me = data.getMe();
    res.status(200).send(me);
});


app.get('/me/hobbies', function (req, res) {
    var hobbies = data.getHobbies();
    res.status(200).send(hobbies);
});

//Post Requests
app.post('/friends', function (req, res) {
    var newFriend = req.body;
    data.addFriend(newFriend);
    res.status(201).send(data.getFriends());
});

app.post('/family', function (req, res) {
    var newPerson = req.body;
    data.addFamily(newPerson);
    res.status(201).send(data.getFamily());
});

app.post('/me/hobbies', function (req, res) {
    var hobby = req.body;
    data.addHobby(hobby);
    res.status(201).send(data.getHobbies());
});

var port = 8080;

app.listen(port, function () {
    console.log('server listening on port ' + port);
});