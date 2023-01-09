const Conversation = require('../models/conversation')

const newConversation = async(req,res) => {
    const {senderId, receiverId} = req.body
        console.log(req.body)
    try {
        const newconversation = new Conversation({ 
            members:[senderId, receiverId],}
            )

        await newconversation.save()
        res.json({
            ok:true,
            newconversation
        })
    } catch (error) {
        console.log(error)
        res.status(401).send('Something went wrong')
    }
   

}

const getConversation = async(req,res) => {
    const {userId} = req.params
    try {
        const conversations = await Conversation.find({
            members:{$in: userId}
        })
        res.json({
            ok:true,
            conversations
        })
    } catch (error) {
        console.log(error)
        res.status(401).send('Something went wrong')
    }
}


module.exports =  {
    newConversation,
    getConversation
}