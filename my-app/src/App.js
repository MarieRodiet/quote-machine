import React from 'react';
import './App.css';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends React.Component {
  //try to put quotes inside state so it is passed to Card as props
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.generateNewIndex = this.generateNewIndex.bind(this);
  }

  generateNewIndex() {
    const random = Math.floor(Math.random() * 14);
    this.setState({
      index: random
    });
  }


  render() {
    let colors = ["#94455c",
      "#2596BE",
      "#Be4f25",
      "#7f1472",
      "#7e9085",
      "#6d78d0",
      "#222969",
      "#226944",
      "#Be4f25",
      "#7f1472",
      "#2596be",
      "#F9b2b2",
      "#F36062",
      "#54a473"];

    return (

      <div id="app" style={{ backgroundColor: colors[this.state.index] }}>
        <Card
          color={colors[this.state.index]}
          onChange={this.generateNewIndex}
          index={this.state.index}
        />
        <span id="byMe">By Marie</span>

      </div>
    );
  }
}


