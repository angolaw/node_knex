import { knex as setup } from 'knex'
export const config = {
  client: 'sqlite',
  connection: {
    filename: './src/database/database.db',
  },
  useNullAsDefault: true,
}

export const knex = setup(config)
