const React = require('react');
const ReactDOM = require('react-dom');

class Navbar extends React.Component {
  componentDidMount() {
    console.log('FOO');
  }
  render() {
    return <div>I <span ref="am" onClick={() => console.log('event')}>am</span> the navbar</div>;
  }
}

function App({ showNavbar = true }) {
  return (
    <div>
      {!!showNavbar && <Navbar />}
    </div>
  );
}

if (typeof window !== 'undefined') {
  window.App = App;
  window.React = React;
  window.ReactDOM = ReactDOM;
}

module.exports = App;
