const jwt = require('jsonwebtoken')

const validateJWT = async(req,res,next) => {
    
    const token = req.header('x-token')
    if(!token){
        return res.status(401).json({
            msg: 'user doesnt have token'
        })
    }
    try {
        const {uid} =  jwt.verify(token, procces.env.SECRET_KEY)
        const authenticatedUser = await User.findById(uid)

        if(!authenticatedUser){
            return res.status(400).json({
                msg: 'User doesnt exists'
            })
        }

        if(!authenticatedUser.status){
            return res.status(400).json({
                msg: 'User is not active'
            })
        }

        req.user =  authenticatedUser
        next()
    } catch (error) {
        
    }


    
}


 module.exports = {
    validateJWT
 }