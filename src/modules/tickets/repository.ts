import type { Database } from '@/database'

export default (db: Database) => ({
  findById: async (id: number) =>
    db.selectFrom('tickets').selectAll().where('userId', '=', id).execute(),

  addTicket: async (data: { userId: any; screeningId: any }) =>
    db
      .insertInto('tickets')
      .values({
        userId: data.userId,
        screeningId: data.screeningId,
      })
      .executeTakeFirst(),

  removeTicketFromScreening: async () => {},
})
