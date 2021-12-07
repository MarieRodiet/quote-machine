import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers.js/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { changeIndex } from "./action-creators";
const store = createStore(reducer);

const mapDispatchToProps = (dispatch) => {
  return {
    generateNewIndex: (index) => {
      dispatch(changeIndex(index))
    }
  };
}

function mapStateToProps(state) {
  //UNDEFINED WHEN NEW QUOTE IS CLICKED
  return {
    quote: state.quote,
    color: state.color,
  }
};


//connect the redux store to the state of App component
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
ReactDOM.render(<AppWrapper />, document.getElementById('root'));


/*
REQUIREMENTS:
1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with corresponding id="text".
3. Within #quote-box, I can see an element with corresponding id="author".
4. Within #quote-box, I can see a clickable element with corresponding id="new-quote".
5. Within #quote-box, I can see a clickable <a> element with corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quote <a> element. This <a> element should include the "twitter.com/intent/tweet" path in it's href attribute to tweet the current quote. */
