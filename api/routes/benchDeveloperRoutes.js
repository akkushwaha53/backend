'use strict';
const express = require("express");
const router = express.Router();
  const benchEmployee = require('../controllers/benchDeveloper');
 
    router.get("/get",benchEmployee.getBenchEmployee);
    


    module.exports = router;