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
  res.send(`
    <html>
      <head>
        <script src="./application.js"></script>
      </head>
      <body>
        <div id="app">${content}</div>
        <script>
          (function() {
            var el = document.getElementById('app');
            ReactDOM.render(React.createElement(App), el);
          })();
        </script>
      </body>
    </html>
  `);
});

app.listen(3000);

console.log('RUNNING');
