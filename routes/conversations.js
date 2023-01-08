const { Router } = require('express')
const {newConversation} = require('../controllers/conversations')
const router = Router()

router.post('/newconversation', newConversation)


module.exports = router