const React = require('react');

class Navbar extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'I ',
      React.createElement(
        'span',
        { ref: 'am', onClick: () => console.log('event') },
        'am'
      ),
      ' the navbar'
    );
  }
}

function App({ showNavbar = true }) {
  return React.createElement(
    'html',
    null,
    React.createElement(
      'head',
      null,
      React.createElement('script', { src: './application.js' }),
      React.createElement(
        'title',
        null,
        'whatever'
      )
    ),
    React.createElement(
      'body',
      null,
      !!showNavbar && React.createElement(Navbar, null)
    )
  );
}

module.exports = App;
