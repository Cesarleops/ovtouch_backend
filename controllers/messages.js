const Message = require('../models/message')

const newMessage = async(req,res) => {
   try {

    const {sendedBy, text, recievedBy} = req.body
    const message = await Message.create({
      members: [sendedBy,recievedBy],
      sendedBy,
      text
    })
    
    res.json(message)
    
   } catch (error) {
     console.log(error)
     res.status(400).send('Something went wrong')
   }
}


 const getMessages = async(req,res) => {
   const {sendedBy, recievedBy} = req.body
   try {
    const messages = await Message.find({
       members: {
        $all: [sendedBy,recievedBy]
       }
    })

    res.json(
      messages
    )
   } catch (error) {
    console.log(error)
    res.status(400).send('Something went wrong')
   }
 }

 const deleteMessage = async(req,res) => {
  const {messageId} = req.params

  const deletedMessage = await Message.findByIdAndDelete(messageId)

  res.json({
      msg:'deleted message',
      deletedMessage
  })
 }
module.exports = {
    newMessage,
    getMessages,
    deleteMessage
}