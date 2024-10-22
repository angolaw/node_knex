import { knex as setup, Knex } from 'knex'
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1646662560.
    filename: './src/database/database.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: '.ts',
    directory: './migrations',
  },
}

export const knex = setup(config)
