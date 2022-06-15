import Thing from '../types/thing'
import connection from '../db-config'
import { OkPacket, RowDataPacket } from 'mysql2'

export const createThing = (name: string, callback: Function) => {
    const queryString = 'INSERT INTO thing (name) VALUES (?)'
    
    connection.query(queryString, [name], (error, result) => {
        if (error) {
            callback(error)
        }
        
        const insertId = (<OkPacket> result).insertId
        callback(null, insertId)
    })
}

export const findOneThing = (thingId: number, callback: Function) => {
    const queryString = 'SELECT * FROM thing WHERE id = ?'

    connection.query(queryString, thingId, (error, result) => {
        if (error) {
            callback(error)
        }

        const row = (<RowDataPacket> result)[0]
        const thing: Thing = {
            id: row.id,
            name: row.name
        }

        callback(null, thing)
    })
}

export const findAllThings = (callback: Function) => {
    const queryString = 'SELECT * FROM thing'

    connection.query(queryString, (error, result) => {
        if (error) {
            callback(error)
        }

        const rows = <RowDataPacket[]> result
        const things: Thing[] = []

        rows.forEach(row => {
            const thing: Thing = {
                id: row.id,
                name: row.name
            }
            things.push(thing)
        })

        callback(null, things)
    })
}

export const updateThing = (thing: Thing, callback: Function) => {
    const queryString = 'UPDATE thing SET name = ? WHERE id = ?'

    connection.query(queryString, [thing.name, thing.id], (error, result) => {
        if (error) {
            callback(error)
        }

        callback(null)
    })
}

export const deleteThing = (thingId: number, callback: Function) => {
    const queryString = 'DELETE FROM thing WHERE id = ?'

    connection.query(queryString, [thingId], (error, result) => {
        if (error) {
            callback(error)
        }
        
        callback(null)
    })
}