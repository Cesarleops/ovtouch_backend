const jwt = require('jsonwebtoken')
const User = require('../models/user')


const createJwt = (uid) => {
    
    return new Promise((resolve,reject) => {
        const payload = {uid}
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '4h'
        }, (err,token) => {
            if(err){
                console.log(err)
                reject('token could not be generated')
            } else {
                resolve(token)
            }
           
        } 
        )
    })
}

const checkJWT = async(token) => {
    try {
        const {uid} =  jwt.verify(token, process.env.SECRET_KEY)
        const authenticatedUser = await User.findById(uid)
        if(authenticatedUser){
            return authenticatedUser
        } else{
            return null
        }
        
    } catch (error) {
        return null
    }
}
module.exports = {
    createJwt,
    checkJWT
}