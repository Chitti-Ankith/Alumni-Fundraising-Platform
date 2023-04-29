const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('./Project')

// Create Schema
const StudentSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }
  ]
});

module.exports = Student = mongoose.model("Student", StudentSchema);
