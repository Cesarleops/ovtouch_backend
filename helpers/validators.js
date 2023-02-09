const User = require('../models/user')



const validEmail = async(email) => {
    const repeatedEmail = await User.findOne({email})
        if(repeatedEmail){
            throw new Error(`Email: ${email} is a registered email`)
        }
}

const userExists = async(userId) => {
    const registeredUser = await User.findById(id)
    if(!registeredUser){
        throw new Error(`${userId} doesn't belong to any user`)
    }
}




module.exports = {
    validEmail,
    userExists,
    
}