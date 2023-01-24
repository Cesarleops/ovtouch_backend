
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const { createJwt } = require('../helpers/create-jwt')

const login = async(req,res) => {
    const { email, password } = req.body
        
    try {
        const user = await User.findOne({email})


        if(!user){
            return res.status(400).json({
                msg: 'Email is not registered'
            })
        }

        if(!user.status){
            return res.status(400).json({
                msg: 'user doesnt exists'
            })
        }
        
        const validPassword = bcryptjs.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({
                msg: 'password is incorrect'
            })
        }

        

        const token = await createJwt(user.id)

        res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(400).json('Something went wrong')
    }


}

const renovateToken = async(req,res) => {
    const {user} = req
    try {
        const token = await createJwt(user.id)
        res.json({
            user,
            token
        })
    } catch (error) {
        console.log(error)
        res.json('something went wrong with jwt')
    }
   

    
}

module.exports = {
    login,
    renovateToken
}