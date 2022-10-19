const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  technology: {
    type: Array,
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
const Employee = mongoose.model("employees", employeeSchema);
module.exports = Employee;