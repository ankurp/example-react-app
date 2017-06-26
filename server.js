const ReactDOMServer = require('react-dom/server');
const React = require('react');
const express = require('express');
const App = require('./src/app');
const readFileSync = require('fs').readFileSync;

const PORT = 3000;
const app = express();
const file = readFileSync(`${__dirname}/lib/app.js`);

app.get('/application.js', (req, res) => {
  res.send(file);
});

app.get('*', (req, res) => {
  const initialState = {};
  const content = ReactDOMServer.renderToString(<App {...initialState} />);

  res.send(`
    <html>
      <body>
        <div id="app">${content}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
        <script src="./application.js"></script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`RUNNING on port ${PORT}`);
});
