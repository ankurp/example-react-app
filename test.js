const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');

class Navbar extends React.Component {
  render() {
    return <div>I <span ref="am" onClick={() => console.log('event')}>am</span> the navbar</div>;
  }
}

function App({ showNavbar = true }) {
  return (
    <html>
      <head>
        <link href="./foo.css" rel="stylesheet" />
        <script src="test.js"></script>
        <title>whatever</title>
      </head>
      <body>
        {!!showNavbar && <Navbar />}
      </body>
    </html>
  );
}

const reactApp = ReactDOMServer.renderToString(<App />);

const app = express();

app.get('*', (req, res) => {
  res.send(reactApp);
});

app.listen(3000);

// ReactDOM.render(<App showNavbar={true} />, document.body);