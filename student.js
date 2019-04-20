
const dbPath = './db.json'
const mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/student')

var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  }

})




module.exports = mongoose.model('Student', studentSchema)