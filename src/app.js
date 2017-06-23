const React = require('react');

class Navbar extends React.Component {
  render() {
    return <div>I <span ref="am" onClick={() => console.log('event')}>am</span> the navbar</div>;
  }
}

function App({ showNavbar = true }) {
  return (
    <html>
      <head>
        <script src="./application.js"></script>
        <title>whatever</title>
      </head>
      <body>
        {!!showNavbar && <Navbar />}
      </body>
    </html>
  );
}

module.exports = App;
