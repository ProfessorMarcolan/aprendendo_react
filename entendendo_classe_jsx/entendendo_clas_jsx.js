// https://reactjs.org/docs/react-without-jsx.html

class Hello extends React.Component {
    render() {
      return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
  }
  let div = React.createElement(Hello, {toWhat: 'World'}, null)
  ReactDOM.render(
    div,
    document.getElementById('root')
  );

  let div1 = <div> <p>oi mundo</p> </div>