import React from 'react';
import { connect } from 'react-redux';
import { changeIndex } from './actions';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers.js/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

const mapDispatchToProps = (dispatch) => {
  return {
    generateNewIndex: () => {
      dispatch(changeIndex())
    }
  };
}

//unable the App component to access what is in the Redux store
function mapStateToProps(state) {
  return {
    index: state.index,
    color: state.color[state.index],
    quote: state.quote[state.index]
  }
};

/*
function mapStateToProps(state) {
  return {
    a: 42,
    todos: state.todos,
    filter: state.visibilityFilter,
  }
} */



//connect the redux store to the state of App component
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
