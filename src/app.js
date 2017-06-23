const React = require('react');
const ReactDOM = require('react-dom');

class Navbar extends React.Component {
  componentDidMount() {
    console.log('Mounting');
  }
  render() {
    return <div>I <span ref="am" onClick={() => console.log('event')}>am</span> the navbar</div>;
  }

  componentWillUnmount() {
    console.log('Unmounting');
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: true,
    };
  }

  toggleNavbar() {
    const { showNavbar } = this.state;

    this.setState({ showNavbar: !showNavbar });
  }

  render() {
    const { showNavbar } = this.state;

    return (
      <div>
        <div onClick={this.toggleNavbar.bind(this)}>Click me</div>
        {!!showNavbar && <Navbar />}
      </div>
    );
  }
}

if (typeof window !== 'undefined') {
  window.App = App;
  window.React = React;
  window.ReactDOM = ReactDOM;
}

module.exports = App;
