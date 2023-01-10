const { Router } = require('express')
const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {messageExists} = require('../helpers/validators')
const {newMessage, getMessages, deleteMessage} = require('../controllers/messages')
const router = Router()

router.post('/newmessage',[
    check('chatId').isMongoId(),
    check('sendedBy').isMongoId(),
    validateFields
], newMessage)


router.get('/:chatId',[
    check('chatId').isMongoId(),
    validateFields
], getMessages)


router.delete('/message/:messageId',[
    check('messageId').isMongoId(),
    check('messageId').custom(messageExists),
    validateFields
], deleteMessage)


module.exports = router