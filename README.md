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