
const {Schema, model} = require('mongoose')


const conversationSchema = Schema({
    members: {
        type: Array
    }
})

module.exports = model('Conversation', conversationSchema)