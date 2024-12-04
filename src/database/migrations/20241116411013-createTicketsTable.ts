import { Kysely, SqliteDatabase } from 'kysely'

/** Migration used to initialize empty database tables for the test database. */
export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('tickets')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('user_id', 'integer', (c) => c.notNull())
    .addColumn('screening_id', 'integer', (c) =>
      c.notNull().references('screenings.id')
    )
    .execute()
}

export async function down() {
  // unnecessary, as this is the first migration, we can just delete the database
}
