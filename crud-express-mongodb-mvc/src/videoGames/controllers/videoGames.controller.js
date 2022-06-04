const videoGamesModel = require('../models/videoGames.model')

class VideoGamesController {
    async listVideoGames(req, res) {
        try {
            const videoGames = await videoGamesModel.listVideoGames()
            res.status(200).send(videoGames)
        }
        catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async getVideoGameById(req, res) {
        try {
            const videoGame = await videoGamesModel.getVideoGameById(req.params.id)
            res.status(200).send(videoGame)
        }
        catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async createVideoGame(req, res) {
        try {
            const newVideoGame = { ...req.body }
            const videoGameId = await videoGamesModel.addVideoGame(newVideoGame)
            res.status(201).send(videoGameId)
        }
        catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async updateVideoGame(req, res) {
        try {
            const newVideoGame = { ...req.body, _id: req.params.id }
            await videoGamesModel.updateVideoGame(newVideoGame)
            res.status(204).send()
        }
        catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async deleteVideoGame(req, res) {
        try {
            await videoGamesModel.deleteVideoGame(req.params.id)
            res.status(204).send()
        }
        catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

module.exports = new VideoGamesController()