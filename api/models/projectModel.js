const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  project_name: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  project_type: {
    type: String,
  },
  project_status: {
    type: String,
  },


  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
const Project = mongoose.model("projects", projectSchema);
module.exports = Project;