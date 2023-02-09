const {Schema, model, default: mongoose} = require('mongoose')


const messageSchema = Schema({
    members: Array,
    sendedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String
    }
})

module.exports = model('Message', messageSchema)