import supertest from 'supertest'
import createDatabase from '@/database'
import createApp from '@/app'

const db = createDatabase(process.env.DATABASE_URL as string, {
  readonly: true,
})

const app = createApp(db)

describe('GET', () => {
  it('should return all screenings', async () => {
    const { body } = await supertest(app).get('/screenings').expect(200)

    expect(body).toHaveLength(0)
  })
})
