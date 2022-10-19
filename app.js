const express = require('express');
  const app = express();
  const port = process.env.PORT || 4000;
  const bodyParser = require("body-parser");
  const Header = require("./api/headers/header")
  const employee = require("./api/routes/employeeRoutes")
  const project = require("./api/routes/projectRouter")
  const assignProject = require("./api/routes/assignProjectRoutes")
  const benchDeveloper = require("./api/routes/benchDeveloperRoutes")
  const cors = require("cors");
  require("./api/db/db")
  app.use(cors());
  app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(Header);
app.use("/api/employee", employee);
app.use("/api/project", project);
app.use("/api/assign", assignProject);
app.use("/api/bench", benchDeveloper);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

  });