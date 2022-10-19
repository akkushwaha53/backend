const express = require("express");
const router = express.Router();
  const projects = require('../controllers/projectController');
 
    router.post("/add",projects.addProject);
    router.get("/get",projects.getProject);
    router.get("/get/:id",projects.getProjectById);
    router.patch("/update/:id",projects.updateProjectById);
    router.delete("/delete",projects.deleteProject);
    router.get("/count",projects.countProject);
    router.get("/ending-project",projects.endingProject);
    


    module.exports = router;