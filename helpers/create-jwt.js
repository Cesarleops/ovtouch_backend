const jwt = require('jsonwebtoken')

const createJwt = (uid) => {
    
    return new Promise((resolve,reject) => {
        const payload = {uid}
        console.log(payload)
        console.log(process.env.SECRET_KEY)

        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '4h'
        }, (err,token) => {
            if(err){
                console.log(err)
                reject('token could not be generated')
            } else {
                console.log(token)
                resolve(token)
            }
           
        } 
        )
    })
}

module.exports = {
    createJwt
}