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


module.exports =  {
    newConversation
}