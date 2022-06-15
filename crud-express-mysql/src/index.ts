import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import thingRouter from './routes/thingRouter'

const app = express()

app.use(express.json())
app.use('/things', thingRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})