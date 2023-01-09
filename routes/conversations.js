const { Router } = require('express')
const {newConversation , getConversation} = require('../controllers/conversations')

const router = Router()

router.post('/newconversation', newConversation)

router.get('/:userId', getConversation)
module.exports = router