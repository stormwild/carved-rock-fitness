# carved-rock-fitness

## Webpack

```sh
yarn add webpack-dev-server -D
yarn webpack --help
yarn webpack help --watch
yarn webpack version
yarn webpack configtest
yarn webpack --watch
```

## Webpack Dev Server

- Runs webpack in watch mode
- Provides an HTTP server
- In-Memory
  - Doesn't produce build assets on disk

## Production or Development

- Slightly smaller code
- Settings more appropriate for Production - source maps

## Babel

```
yarn add -D babel-loader @babel/core @babel/preset-env
```

## Typescript

```sh
yarn add -D typescript ts-loader
```

## Plugins

```sh
yarn add -D html-webpack-plugin
yarn add -D css-loader style-loader
yarn add -D sass-loader sass
yarn add -D mini-css-extract-plugin
yarn add -D postcss postcss-loader postcss-preset-env
yarn add -D copy-webpack-plugin
yarn add -D html-loader
```

## Tools

Webpack Tools

### Analyzers

```sh
yarn add -D webpack-bundle-analyzer
```

### Server Proxy

```sh
npm install -g json-server
touch db.json
vim db.json
json-server --watch db.json
```

`// db.json`

```json
{
  "users": [
    {
      "id": 1,
      "name": "Joe"
    },
    {
      "id": 2,
      "name": "Jane"
    },
    {
      "id": 3,
      "name": "Oprah"
    }
  ]
}
```

```js
{
  devServer: {
    // liveReload: false,
    watchFiles: ["src/**/*", "index.html"],
    static: "./dist",
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
}
```
