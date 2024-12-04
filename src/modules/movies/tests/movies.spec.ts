import supertest from 'supertest'
import createDatabase from '@/database'
import createApp from '@/app'

const db = createDatabase(process.env.DATABASE_URL as string, {
  readonly: true,
})

const app = createApp(db)

describe('GET', () => {
  it('should return all movies if no ids are provided', async () => {
    const { body } = await supertest(app).get('/movies').expect(200)

    expect(body).toHaveLength(0)
  })

  it('should return movies by a list of query params', async () => {
    const { body } = await supertest(app)
      .get('/movies?id=133093,816692')
      .expect(200)

    expect(body).toHaveLength(0)
  })
})
