import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers.js/reducer';
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
  return {
    quote: state.quote,
    color: state.color,
  }
};


const Container = connect(mapStateToProps, mapDispatchToProps)(App);

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
ReactDOM.render(<AppWrapper />, document.getElementById('root'));
