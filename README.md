## Run project

```npm run dev```

## ESLint

```npm i eslint @rocketseat/eslint-config -D```

### Config - .eslintrc.json

```{
    "extends": [
        "@rocketseat/eslint-config/node"
    ]
}
```

### Eslint format on settings 
```   "editor.codeActionsOnSave": {
        "source.fixAll.eslint":true
    },
```

### Linting script
```    "lint": "eslint src -ext .ts --fix" ```


## Banco de dados

### Knex - query builder

``` npm install knex```
``` npm install sqlite3```

### Migrations  - keep history of database evolution

#### criando a primeira migration

``` npx knex migrate:make table_name```


#### fix knex need for typescript handling

```    "knex": "node --import tsx ./node_modules/.bin/knex"```

#### Running migration with knex package.json alias

```npm run knex -- migrate:make create-documents```