const { Router } = require('express')
const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {messageExists} = require('../helpers/validators')
const {newMessage, getMessages, deleteMessage} = require('../controllers/messages')
const router = Router()

router.post('/newmessage',[
    check('recievedBy').isMongoId(),
    check('sendedBy').isMongoId(),
    validateFields
], newMessage)


router.post('/message',[
    check('sendedBy').isMongoId(),
    check('recievedBy').isMongoId(),
    validateFields
], getMessages)


router.delete('/message/:messageId',[
    check('messageId').isMongoId(),
    check('messageId').custom(messageExists),
    validateFields
], deleteMessage)


module.exports = router