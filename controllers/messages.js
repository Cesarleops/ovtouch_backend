const Message = require('../models/message')

const newMessage = async(req,res) => {
   try {

    const {sendedBy, text, chatId} = req.body
    const message = new Message({sendedBy, text, chatId})
    message.save()
    res.json({
        ok:true,
        message
    })
    
   } catch (error) {
     console.log(error)
     res.status(400).send('Something went wrong')
   }
}

module.exports = {
    newMessage
}