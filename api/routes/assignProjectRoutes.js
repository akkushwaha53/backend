'use strict';
const express = require("express");
const router = express.Router();
  const assignProject = require('../controllers/assignProject');
 
    router.post("/project",assignProject.assignProject);
    router.get("/get",assignProject.getAssignProject);
    // router.get("/get",employees.getEmployee);


    module.exports = router;