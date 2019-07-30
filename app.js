var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Gender = require('./models/gender');
Users = require('./models/users');

//connect to Mongoose
mongoose.connect('mongodb://localhost/usermanagement');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/users');
});

app.get('/api/gender', function(req, res){
    Gender.getGender(function(err, gender){
      if (err) {
        throw err;
      }
      res.json(gender);
    });
});
//get list of all users
app.get('/api/users', function(req, res){
    Users.getUsers(function(err,users){
      if (err) {
        throw err;
      }
      res.json(users);
    });
});

//get user by id.
app.get('/api/users/:_id', function(req, res){
    Users.getUserById(req.params._id, function(err,user){
      if (err) {
        throw err;
      }
      res.json(user);
    });
});

//add new method,tested using Rest Easy on chrome
app.post('/api/gender', function(req, res){
  var gender = req.body;
    Gender.addGender(gender, function(err, gender){
      if (err) {
        throw err;
      }
      res.json(gender);
    });
});

app.post('/api/users', function(req, res){
  var user = req.body;
    Users.adduser(book, function(err,users){
      if (err) {
        throw err;
      }
      res.json(users);
    });
});

app.put('/api/users/:_id', function(req, res){
  var id = req.params._id;
  var user = req.body;
  Users.updateUser(id, book, {}, function(err,user){
    if (err) {
      console.log(err);
      return;
    } else {
          res.json(user);
    }
  });

});

app.delete('/api/users/:_id', function(req, res){
  var id = req.params._id;
  var user = req.body;
  Users.deleteUser(id, function(err,user){
    if (err) {
      console.log(err);
      return;
    } else {
          res.json(user);
    }
  });

});



app.listen(3000);
console.log('Running on port 3000...');
