const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require('./Project')
// Create Schema
const AlumSchema = new Schema({
  
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
  donations: {
    type: Number,
    default: 0
  },
  projectsDon:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project' 
  } 
});

module.exports = Alum = mongoose.model("Alum", AlumSchema);
