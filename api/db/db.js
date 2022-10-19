const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://Graffersis:Y4aMxZ3M3wvHCTYg@ac-wmmcadq-shard-00-00.3vyxkjp.mongodb.net:27017,ac-wmmcadq-shard-00-01.3vyxkjp.mongodb.net:27017,ac-wmmcadq-shard-00-02.3vyxkjp.mongodb.net:27017/projectmanagement?ssl=true&replicaSet=atlas-11v1s5-shard-0&authSource=admin&retryWrites=true&w=majority",
    
    {
      useNewUrlParser: true,
    //   useCreateIndex: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    }
  )
  .then((data) => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("mongoose not connected", err);
  });