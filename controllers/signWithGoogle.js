const { createJwt } = require("../helpers/create-jwt")
const { googleVerify } = require("../helpers/verify-google")
const User = require('../models/user')
const signWithGoogle = async(req,res) => {
    const {id_token} = req.body
    console.log(id_token)
    try {
        const {name, email , img} = await googleVerify(id_token)
        let user =  await User.findOne({email})
        if(!user){
            const data = {
                name,
                email,
                password: 'p',
                img,
                google : true
            }

            user = new User(data)
            await user.save()
        }
        if(!user.status){
            res.status(400).json('user is not active')
        }

        const token = await createJwt(user.id)
        res.json({
            msg:'todo ok',
            user,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(400).json('bad request')
    }
    
}

module.exports = {
    signWithGoogle
}