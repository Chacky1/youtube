const mongoose = require('mongoose')
const { Schema } = mongoose

class VideoGamesModel {
    videoGamesSchema = new Schema({
        name: String,
        genres: [String],
        platforms: [String],
        multiplayer: Boolean
    })

    VideoGame = mongoose.model('VideoGame', this.videoGamesSchema)

    constructor() {
        try {
            mongoose.connect(process.env.CONNECTION)
        }
        catch (error) {
            throw error
        }
    }

    async listVideoGames() {
        try {
            const videoGames = await this.VideoGame.find().exec()
            return videoGames
        }
        catch (error) {
            throw error
        }
    }

    async getVideoGameById(videoGameId) {
        try {
            const videoGame = await this.VideoGame.findById(videoGameId).exec()
            return videoGame
        }
        catch (error) {
            throw error
        }
    }


    async addVideoGame(newVideoGame) {
        try {
            const newVideoGameMongoose = new this.VideoGame(newVideoGame)
            const videoGameRegistered = await newVideoGameMongoose.save()
            return videoGameRegistered._id
        }
        catch (error) {
            throw error
        }
    }

    async updateVideoGame(videoGame) {
        try {
            await this.VideoGame.findByIdAndUpdate(videoGame._id, videoGame)
        }
        catch (error) {
            throw error
        }
    }

    async deleteVideoGame(videoGameId) {
        try {
            await this.VideoGame.findByIdAndDelete(videoGameId)
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new VideoGamesModel()