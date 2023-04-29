const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('./Project')

// Create Schema
const ProfSchema = new Schema({
  
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
  projectsApp: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'  
    }
  ]
});

module.exports = Prof = mongoose.model("Prof", ProfSchema);
