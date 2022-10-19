const mongoose = require("mongoose");

const assignProjectSchema = mongoose.Schema({
    employee_id: [
        {
            type: mongoose.Types.ObjectId,
            ref: "employees",
        
            // required: [true, "filed is required with Number value"],
          } 
    ]
    
   ,
  project_id: {
    type: mongoose.Types.ObjectId,
    ref: "projects",
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  status : {
    type: Boolean,
    default:true
  }
});
const AssignProject = mongoose.model("assignprojects", assignProjectSchema);
module.exports = AssignProject;