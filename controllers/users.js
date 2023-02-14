const User = require('../models/user')
const bcryptjs = require('bcryptjs')


const newUser = async(req,res) => {

 
    const {name, password, email, img, status, google} = req.body
   
    const salt = bcryptjs.genSaltSync()
 

    try {
        const user = new User({name, password, email, img, status, google})
        
        user.password = bcryptjs.hashSync(password,salt)
        await user.save()
        res.json({
            ok:true,
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).send('Something went wrong')
    }
}

const updateUser = async(req,res) => {
    const {userId} = req.params
    const {password, google , ...rest} = req.body

    if(password){
        const salt = bcryptjs.genSaltSync()
        rest.password = bcryptjs.hashSync(password,salt)
    }

    const user = await User.findByIdAndUpdate(userId, rest)

    res.json({
        msg:'updated user',
        user
    })
}

const getUsers = async(req,res) => {
  const {uid} = req.params
  const users = await User.find({ _id: {$ne: uid} })
  res.json(users)
}


const deleteUser = async(req,res) => {
    const {userId} = req.params

    const deletedUser = await User.findByIdAndUpdate(userId, {status: false})

    res.json({
        msg:'deleted user',
        deletedUser
      
    })
}
module.exports = {
    newUser,
    updateUser,
    deleteUser,
    getUsers
}