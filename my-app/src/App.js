import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import { changeIndex } from './actions';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  //try to put quotes inside state so it is passed to Card as props

  getNewIndex = () => {
    this.setState({
      index: Math.floor(Math.random() * 14),
    });
  }

  render() {
    const backgroundColors = [
      { backgroundColor: "#94455c" },
      { backgroundColor: "#2596BE" },
      { backgroundColor: "#Be4f25" },
      { backgroundColor: "#7f1472" },
      { backgroundColor: "#7e9085" },
      { backgroundColor: "#6d78d0" },
      { backgroundColor: "#222969" },
      { backgroundColor: "#226944" },
      { backgroundColor: "#Be4f25" },
      { backgroundColor: "#7f1472" },
      { backgroundColor: "#2596be" },
      { backgroundColor: "#F9b2b2" },
      { backgroundColor: "#F36062" },
      { backgroundColor: "#54a473" }
    ];



    return (
      <div id="app" style={backgroundColors[this.state.index]}>
        <Card
          index={this.state.index}
          color={backgroundColors[this.state.index].backgroundColor}
          onChange={this.getNewIndex}
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
const mapDispatchToProps = (dispatch) => ({
  getNewIndex: (index) => dispatch(changeIndex(index)),
});

//unable the App component to access what is in the Redux store
const mapStateToProps = (state) => ({
  appState: state,
});

//connect the redux store to the state of App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
