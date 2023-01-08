const User = require('../models/user')


const newUser = async(req,res) => {
    const {name, password, email, img, status, google} = req.body
    console.log(req.body)
    try {
        const user = new User({name, password, email, img, status, google})
        await user.save()
        res.json({
            ok:true,
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(401).send('Something went wrong')
    }
}

module.exports = {
    newUser
}