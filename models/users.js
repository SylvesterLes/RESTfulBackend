var mongoose = require('mongoose');

//users based Schema
var usersSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  designation:{
    type: String,
    required: true
  },
  image_url:{
    type: String
  },
  work_url:{
    type: String
  },
  address:{
    type:String
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Users = module.exports = mongoose.model('Users', usersSchema);

// function to  GET employees/Users to be accessible from outside
module.exports.getUsers = function(callback, limit){
    Users.find(callback).limit(limit);
}

//function get single user/employee
module.exports.getUserById = function(id, callback){
    Users.findById(id, callback);
}

//Add new user / employee
module.exports.adduser = function(users,callback){
    Users.create(users, callback);
}

module.exports.updateUser = function(id, users, options, callback){
  var query = {_id: id};
  var update = {
    name: user.name,
    gender: user.gender,
    description: user.description,
    designation: user.designation,
    address: user.address,
    age: user.age,
    image_url: user.image_url,
    work_url: user.work_url
  }
  Users.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteUser = function(id, callback){
  var query = {_id: id};
  Users.remove(query, callback);
}
