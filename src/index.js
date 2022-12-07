//PROBLEM1: LINE 15... PROVIDER doesn't RENDER ANY CHILD COMPONENTS around 8min-10min mark

// import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import store from './store';
// import store from './store/store'; // SHOULD i DELETE THIS, I DID THIS INSTEAD OF THE PREVIOUS LINE
import { Provider } from 'react-redux'; //7:30min SHOULD I DELETE THIS? NOT SURE IF ITS READING IT...
// import { Provider } from 'react'; // SHOULD i DELETE THIS, I DID THIS INSTEAD OF THE PREVIOUS LINE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Router store={store}>
//     <App />
//   </Router>, document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App /> //WHY WONT THIS LOAD IF ITS WRAPPED IN PROVIDER???
//   // <Provider store={store}>
//   //   <App />
//   // </Provider>
// );

// This was from ./index.js...ILL JUST USE THIS AS A REFERENCE...
  // ReactDOM.render(
  //   <App />, document.getElementById('root') 
  // );
reportWebVitals();
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
