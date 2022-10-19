const Employee = require("../models/employeeModel")
const Types = require("../types/types")
const addEmployee = async (req, res) => {
    console.log(req.body);
    const employee = new Employee(req.body)
    employee.save().then(data => {
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

const getEmployee =  (req,res) =>{
    
var data = Employee.find();

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
})
 


}
const deleteEmployee = async (req, res, next) => {
    console.log(req.query.id);
    try {
     
        Employee.deleteMany(
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
  const getEmployeeById =  (req,res) =>{
    console.log(req.params.id);
    var data = Employee.findById({_id:req.params.id});
    
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
    })
     
    
    
    }
  const updateEmployee = async (req, res, next) => {
    // console.log("kjk",req.body, req.params.id);
    try {
     
        Employee.findOneAndUpdate(
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

module.exports = { addEmployee, getEmployee, deleteEmployee ,getEmployeeById, updateEmployee}