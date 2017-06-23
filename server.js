const ReactDOMServer = require('react-dom/server');
const React = require('react');
const express = require('express');
const App = require('./src/app');
const readFileSync = require('fs').readFileSync;

const content = ReactDOMServer.renderToString(<App />);

const app = express();
const file = readFileSync(`${__dirname}/lib/app.js`);

app.get('/application.js', (req, res) => {
  res.send(file);
});

app.get('*', (req, res) => {
  res.send(content);
});

app.listen(3000);

console.log('RUNNING');

// ReactDOM.render(<App showNavbar={true} />, document.body);
