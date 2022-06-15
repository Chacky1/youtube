require('dotenv').config()

const express = require('express')
const videoGamesRouter = require('./videoGames/videoGames.routes')

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api/video-games', videoGamesRouter)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})