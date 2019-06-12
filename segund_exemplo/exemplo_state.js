class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }
  
  let obj_1 = <Timer />
  let obj_2 = React.createElement(Timer, null, null)

  ReactDOM.render(
    obj_2 ,
    document.getElementById('root')
  );

  ReactDOM.render(
    obj_1 ,
    document.getElementById('timer')
  );