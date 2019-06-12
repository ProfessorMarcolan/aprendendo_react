class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  let objeto1 = React.createElement(HelloMessage, {
    name: "oi mundo"
  },null);

  let objeto = <HelloMessage name="Taylor" />
  ReactDOM.render(
    objeto1,
    document.getElementById('root')
  );