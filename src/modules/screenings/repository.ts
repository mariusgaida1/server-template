import type { Database } from '@/database'

export default (db: Database) => ({
  findAll: async (limit = 10, offset = 0) =>
    db
      .selectFrom('screenings')
      .innerJoin('movies', 'movies.id', 'screenings.movieId')
      .select([
        'screenings.id',
        'screenings.numbersOfTickets',
        'screenings.numbersOfTicketsLeft',
        'screenings.timestamp',
        'movies.title',
        'movies.year',
      ])
      .limit(limit)
      .offset(offset)
      .execute(),

  findByIds: async (ids: number[]) =>
    db.selectFrom('screenings').selectAll().where('id', 'in', ids).execute(),

  addScreening: async (data: { timestamp: any; movieId: any; tickets: any }) =>
    db
      .insertInto('screenings')
      .values({
        timestamp: data.timestamp,
        movieId: data.movieId,
        numbersOfTickets: data.tickets,
        numbersOfTicketsLeft: data.tickets,
      })
      .executeTakeFirst(),
})
