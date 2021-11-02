import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers.js/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
class AppWrapper extends React.Component {
constructor(props){
  super(props)
    this.state = {
      index: 0
    }
}
  // Change code above this line
  render() {
    <Provider store={store}>
      <App />
    </Provider>
  }
}; */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
