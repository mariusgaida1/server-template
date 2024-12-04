import { Router } from 'express'
import buildRespository from './repository'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      if (typeof req.query.id === 'string') {
        const tickets = await messages.findById(Number(req.query.id))
        res.status(200)
        res.json(tickets)
      } else {
        res.status(400).send({ error: 'No user id was provided.' })
      }
    })
  )

  router.post(
    '/',
    jsonRoute(async (req, res) => {
      const data = req.body
      await messages.addTicket(data)
      res.status(200)
    })
  )

  return router
}
