var mongoose = require('mongoose');

//Gender based Schema
var genderSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Gender = module.exports = mongoose.model('Gender', genderSchema);

 module.exports.getGender = function(callback, limit){
    Gender.find(callback).limit(limit);
}

//Add new Gender
module.exports.addGender = function(gender,callback){
    Gender.create(gender, callback);
}
