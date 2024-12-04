const userHelper = require("../helper/userHelper")

module.exports = {
    addUserForm:(req,res)=>{
       res.render('userRegister');
    },
    addUser:(req,res)=>{
        userHelper.addUser(req.body)
    .then((response) => {
      if (response.success) {
        res.status(200).json({ message: response.message, insertedId: response.insertedId });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.error  });
    });
    },
    apdateUser:(req,res)=>{
        userHelper.apdateUser().then(()=>{
            
        })
    },
    deleteUser:(req,res)=>{
        userHelper.deleteUser().then(()=>{
            
        })
    },
    getUser:(req,res)=>{
        userHelper.getUser().then((users)=>{
            res.render('students',{users})
        })
    }
}