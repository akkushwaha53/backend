const Project = require("../models/projectModel");
const types = require("../types/types");
const Types = require("../types/types")
const addProject = async (req, res) => {
    console.log(req.body);
    const project = new Project(req.body)
    project.save().then(data => {
        res.status(200).send({
            status: true,
            data: data,
            message: Types.MESSAGE.RECORD_SUCCESSFULLY_ADDED
        });
    }).catch(err => {
        res.status(200).send({
            status: false,
            message: Types.MESSAGE.RECORD_SUCCESSFULLY_NOT_ADDED,
        })

    })

}
const getProject =  (req,res) =>{
 
    var data = Project.find();
    
    data.then(re=>{
        res.status(200).send({
            status: true,
            data: re,
            message: Types.MESSAGE.FOUND
        });
    }).catch(err=>{
        res.status(200).send({
            status: false,
            message: Types.MESSAGE.NOT_FOUND
        });
    })
     
    
    
    }
const countProject = (req, res) =>{
    var data = Project.find();
    
    data.then(re=>{
        res.status(200).send({
            status: true,
            data: re.length,
            message: Types.MESSAGE.FOUND
        });
    }).catch(err=>{
        res.status(200).send({
            status: false,
            message: Types.MESSAGE.NOT_FOUND
        });
    })
   
    }
    // endingProject
    const endingProject = async(req, res) =>{
        var i=0
        var arr=[]
         Project.find().then(async(re)=>{
           
           re.map((test)=>{
            i++
                // console.log("kjjdfsdfdf",test);
                var Difference_In_Time = test.end_date.getTime()-new Date().getTime() ;
                var day =(Difference_In_Time / (1000 * 3600 * 24)).toFixed()
                if(day>=0 && day<=15){
                    arr.push(test)
                    // console.log("test",test);
                }else{
                    // console.log("test else",test);
                }
                // console.log("re.length===i",re.length, i);
                if(re.length===i){
                    res.status(200).send({
                        status: true,
                        data:arr,
                        message: Types.MESSAGE.FOUND
                    });
                }
        //    console.log((Difference_In_Time / (1000 * 3600 * 24)).toFixed());
            })
       
           
        }).catch(err=>{
            res.status(200).send({
                status: false,
                message: Types.MESSAGE.NOT_FOUND
            });
        })
        
    
       
        }
        // deleteProject
        const deleteProject = async (req, res, next) => {
            console.log(req.query.id);
            try {
             
              Project.deleteMany(
                { _id: req.query.id },
                function (data, err) {
                  console.log("err", err.deletedCount);
                  if (err.deletedCount === 0) {
                    res
                      .status(200)
                      .send({ status: false, message:types.MESSAGE.NOT_DELETE });
                  } else {
                    res
                      .status(200)
                      .send({ status: true, message: Types.MESSAGE.DELETE });
                  }
                }
              );
            } catch (error) {
              res
                .status(200)
                .send({ status: false, message: types.MESSAGE.SOMETHING });
            }
          };
          const updateProjectById = async (req, res, next) => {
            // console.log("kjk",req.body, req.params.id);
            try {
             
                Project.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $set: req.body,
                  },
                function (data, err) {
                //   console.log("err", data);
                  if (err.deletedCount === 0) {
                    res
                      .status(200)
                      .send({ status: false, message:Types.MESSAGE.NOT_UPDATED });
                  } else {
                    res
                      .status(200)
                      .send({ status: true, data:req.body, message: Types.MESSAGE.UPDATE });
                  }
                }
              );
            } catch (error) {
              res
                .status(200)
                .send({ status: false, message: types.MESSAGE.SOMETHING });
            }
          };
    
    const getProjectById =  (req,res) =>{
        console.log(req.params.id);
        var data = Project.findById({_id:req.params.id});
        
        data.then(re=>{
            console.log("fkdkd",re);
            res.status(200).send({
                status: true,
                data: re,
                message: Types.MESSAGE.FOUND
            });
        }).catch(err=>{
            res.status(200).send({
                status: false,
                message: Types.MESSAGE.NOT_FOUND
            });
        })}
module.exports ={addProject, getProject, countProject, endingProject, deleteProject, updateProjectById, getProjectById}