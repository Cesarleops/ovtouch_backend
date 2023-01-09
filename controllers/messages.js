const Message = require('../models/message')

const newMessage = async(req,res) => {
   try {

    const {sendedBy, text, chatId} = req.body
    const message = new Message({sendedBy, text, chatId})
    await message.save()
    res.json({
        ok:true,
        message
    })
    
   } catch (error) {
     console.log(error)
     res.status(400).send('Something went wrong')
   }
}


 const getMessages = async(req,res) => {
   const {chatId} = req.params
   try {
    const messages = await Message.find({
       chatId
    })

    res.json({
      ok:true,
      messages
    })
   } catch (error) {
    console.log(error)
    res.status(400).send('Something went wrong')
   }
 }
module.exports = {
    newMessage,
    getMessages
}