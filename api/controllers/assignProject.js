const Assign = require("../models/assignProjectModel")
const Types = require("../types/types")
const Employee = require("../models/employeeModel")
const Project = require("../models/projectModel")

const assignProject = async (req, res) => {
    console.log(req.body);
    const assignProjectToEmployee = new Assign(req.body)
    assignProjectToEmployee.save().then(data => {
        res.status(200).send({
            status: true,
            data: data,
            message: Types.MESSAGE.RECORD_SUCCESSFULLY_ADDED
        });
    }).catch(err => {
        res.status(200).send({
            status: false,
            err,
            message: Types.MESSAGE.RECORD_SUCCESSFULLY_NOT_ADDED,
        })

    })

}
// getAssignProject
const getAssignProject = (req, res) =>{
    var data = Assign.find();

    data.then(re=>{
        var arr=[]
        var i=0;
        console.log("re[0]",re[0].project_id);
        // const resId = re[0]._id
        var ProjectData = Project.findById({_id:re[0].project_id});
        ProjectData.then(pro=>{
            console.log("pro",pro);
            re[0].employee_id.map(_id=>{
                Employee.findById(_id).then((da)=>{
                    i++
                    arr.push(da)
                    if(i===re[0].employee_id.length){
                        res.status(200).send({
                            status: true,
                            data: {...arr, project:pro},
                            message: Types.MESSAGE.FOUND
                        });
                    }
                    
                    // console.log("id",i,re[0].employee_id.length);
                    // arr.push(da)
    
                }).catch(err=>{
                    console.log(err);
                })
               
            });
        }).catch(err=>{
            console.log("err",err);
        })
            // console.log("pro",pro);
           
       
      
       
    }).catch(err=>{
        res.status(200).send({
            status: false,
            message: Types.MESSAGE.NOT_FOUND
        });
    })
}


module.exports = { assignProject, getAssignProject }