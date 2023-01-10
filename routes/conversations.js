const { Router } = require('express')
const {check} = require('express-validator')
const {validateFields} = require('../middlewares/validate-fields')
const {conversationExists} = require('../helpers/validators')
const {newConversation , getConversation, deleteConversation} = require('../controllers/conversations')

const router = Router()

router.post('/newconversation', newConversation)

router.get('/:userId',[
    check('userId').isMongoId(),
    validateFields
],getConversation)

router.delete('/conversation/:chatId',[
    check('chatId').isMongoId(),
    check('chatId').custom(conversationExists),
    validateFields
],deleteConversation)

module.exports = router