import React from 'react';
import './App.css';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends React.Component {
  //try to put quotes inside state so it is passed to Card as props
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





// to provide specific action creators to your React components 
//so they can dispatch actions against the Redux store
//returns a function that calls dispatch with an action creator and any relevant action data

/* mapDispatchToProps()takes dispatch as an argument,
then returns an object. The object should have a property getNewQuote
set to the dispatch function, which takes a parameter for the new index
to get when it dispatches changeQuote, which is the action creator()*/

