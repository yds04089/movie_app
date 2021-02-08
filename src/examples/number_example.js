import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  }
  //setState가 호출될 때마다 react는 다시 render()를 함
  add = () => {
    //this.setState({count: this.state.count - 1})보다 아래코드로 짜는게 좋음 (성능차이)
    this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }
  render(){
    return (
    <div>
      <h1>Now number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>)
  }
}

export default App;
