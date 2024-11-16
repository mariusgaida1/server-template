import type { Database } from '@/database'

export default (db: Database) => ({
  findAll: async (limit = 10, offset = 0) =>
    db.selectFrom('screening').selectAll().limit(limit).offset(offset).execute(),

  findByIds: async (ids: number[]) =>
    db.selectFrom('screening').selectAll().where('id', 'in', ids).execute(),
})
