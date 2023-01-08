const {Schema, model} = require('mongoose')


const messageSchema = Schema({
    chatId: {
        type: String
    },
    sendedBy: {
        type: String
    },
    text: {
        type: String
    }
})

module.exports = model('Message', messageSchema)