import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
import rootReducer from './reducers'
require('dotenv').config()


const middleware = [thunk]
const initialState = {}

const store = createStore(rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(...middleware))
)



ReactDOM.render(
  <Provider store={store} >
    <Router>
      <React.StrictMode>

        <App />

      </React.StrictMode>
    </Router>

  </Provider>


  ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
