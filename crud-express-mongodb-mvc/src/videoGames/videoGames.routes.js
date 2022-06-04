const express = require('express')
const videoGamesController = require('./controllers/videoGames.controller')

const router = express.Router()

router.get('/', videoGamesController.listVideoGames)
router.get('/:id', videoGamesController.getVideoGameById)
router.post('/', videoGamesController.createVideoGame)
router.put('/:id', videoGamesController.updateVideoGame)
router.delete('/:id', videoGamesController.deleteVideoGame)

module.exports = router