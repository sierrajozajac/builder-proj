# Initializing the project

* Run `npm init -y` to initialize the project.
* Run `npm i webpack webpack-cli --save-dev` to install webpack.
* Put the following code into package.json :
```javascript
"scripts": {
  "build": "webpack --mode production"
}
```
* Run `npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev` to pull in dependencies.
* Create file .babelrc .
* Put the following code into .babelrc
```javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
* Create file webpack.config.js .
* Put the following code into webpack.config.js :
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```
* Run `npm i react react-dom` to pull in React.
* Run `npm run build` to test that the linked component is working.
* Run `npm i html-webpack-plugin html-loader --save-dev` to pull the dependencies required to process HTML.
* Update the contents of webpack.config.js :
```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```
* Run `npm run build`
* Open up /dist/index.html
# Notes for future development
* To change the which component is processes and displayed, change which component is imported in builder-proj/src/index.js .
