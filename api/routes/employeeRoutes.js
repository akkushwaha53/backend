'use strict';
const express = require("express");
const router = express.Router();
  const employees = require('../controllers/employeeController');
 
    router.post("/add",employees.addEmployee);
    router.get("/get",employees.getEmployee);
    router.get("/get/:id",employees.getEmployeeById);
    router.patch("/update/:id",employees.updateEmployee);
    router.delete("/delete",employees.deleteEmployee);
    


    module.exports = router;