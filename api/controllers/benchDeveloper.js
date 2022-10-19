const Assign = require("../models/assignProjectModel")
const Types = require("../types/types")
const Employee = require("../models/employeeModel")

const getBenchEmployee = (req, res) =>{
  
            // console.log("assignId",assignId);
            Employee.find().then(empId=>{
    
                
                //   console.log("empId",empId);
                    var data = Assign.find();
                    var filtereddata=[]
                    data.then(re=>{

                        // re[0].employee_id.map(id=>{
                        //     filtereddata.push( empId.filter((emId)=>{
                        //         console.log(emId._id!==id);
                        //         // return emId
                        //     }))
                            
                        // })
                        // console.log( filtereddata.length);
                        
                        res.status(200).send({
                            status: true,
                            data: empId.length-re[0].employee_id.length,
                            message: Types.MESSAGE.FOUND
                        });
                        // console.log(re[0].employee_id.length, empId.length)
                
            }).catch(err=>{
                console.log(err);
            })

       
  
    //    console.log("re",arr);
    }).catch(err=>{
       console.log(err);
    })
   }

module.exports = { getBenchEmployee }