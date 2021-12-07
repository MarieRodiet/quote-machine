import React from 'react';
import './App.css';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.generateNewQuoteAndColor = this.generateNewQuoteAndColor.bind(this);
  }

  generateNewQuoteAndColor() {
    let newIndex = Math.floor(Math.random() * 14);
    this.props.generateNewIndex(newIndex);
  }

  render() {
    return (
      <div id="app" style={{ backgroundColor: this.props.color }}>
        <Card
          color={this.props.color}
          onChange={this.generateNewQuoteAndColor}
          quote={this.props.quote}
        />
        <span id="byMe">By Marie</span>

      </div>
    );
  }
}


