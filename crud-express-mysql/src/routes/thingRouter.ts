import express, {Request, Response} from 'express'
import * as thingModel from '../models/thing'
import Thing from '../types/thing'

const thingRouter = express.Router()

thingRouter.get('/', async (req: Request, res: Response) => {
    thingModel.findAllThings((error: Error, things: Thing[]) => {
        if (error) {
            return res.status(500).json({"errorMessage": error.message})
        }

        res.status(200).json({"data": things})
    })
})

thingRouter.post('/', async (req: Request, res: Response) => {
    const newThingName: string = req.body.name
    thingModel.createThing(newThingName, (error: Error, thingId: number) => {
        if (error) {
            return res.status(500).json({"message": error.message})
        }

        res.status(200).json({"thingId": thingId})
    })
})

thingRouter.get('/:id', async (req: Request, res: Response) => {
    const thingId: number = Number(req.params.id)
    thingModel.findOneThing(thingId, (error: Error, thing: Thing) => {
        if (error) {
            return res.status(500).json({"message": error.message})
        }

        res.status(200).json({"data": thing})
    })
})

thingRouter.put('/:id', async (req: Request, res: Response) => {
    const thing: Thing = req.body
    thingModel.updateThing(thing, (error: Error) => {
        if (error) {
            return res.status(500).json({"message": error.message})
        }

        res.status(200).send()
    })
})

thingRouter.delete('/:id', async (req: Request, res: Response) => {
    const thingId: number = Number(req.params.id)
    thingModel.deleteThing(thingId, (error: Error) => {
        if (error) {
            return res.status(500).json({"message": error.message})
        }

        res.status(200).send()
    })
})

export default thingRouter