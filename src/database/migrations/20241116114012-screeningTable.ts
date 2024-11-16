import { Kysely, SqliteDatabase } from 'kysely'

/** Migration used to initialize empty database tables for the test database. */
export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('screening')
    .ifNotExists()
    .addColumn('timestamp', 'timestamp')
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('number_of_tickets', 'numeric')
    .addColumn('number_of_tickets_left', 'numeric')
    .addColumn('movie_id', 'integer', (c) =>
      c.notNull().references('movies.id'))
    .execute()
}

export async function down() {
  // unnecessary, as this is the first migration, we can just delete the database
}
