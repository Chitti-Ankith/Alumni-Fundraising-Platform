const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require('./Student')
require('./Alum')

// Create Schema
const ProjectSchema = new Schema({
  project_title: {
    type: String,
    required: true
  },
  project_description: {
    type: String,
    required: true
  },
  supervising_professor: {
    type: String,
    required: true
  },
  project_creator: { 
    type: String, 
    required: true
  },
  pic: Buffer,
  funds_required: Number,
  funds_collected: {
      type: Number,
      default: 0
  },
  recommendations:[
    {
      type: String
    }
  ],
  donors:[
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Alum'
    }
  ],
  status: { 
    type: String, 
    enum: ['approved', 'rejected', 'pending'],
    default: 'pending'
  }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
