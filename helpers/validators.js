const User = require('../models/user')
const Message = require('../models/message')
const Conversation = require('../models/conversation')

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

const conversationExists = async(conversationId) => {
    const registeredConversation =  await Conversation.findById(conversationId)
    if(!registeredConversation){
        throw new Error(`${conversationId} doesn't belong to any conversation`)
    }
}

const messageExists = async(messageId) => {
    const registeredMessage =  await Message.findById(messageId)
    if(!registeredMessage){
        throw new Error(`${messageId} doesn't belong to any message`)
    }
}
module.exports = {
    validEmail,
    userExists,
    conversationExists,
    messageExists
}