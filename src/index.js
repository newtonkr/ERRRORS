import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore } from "redux";



const userReducer = (state,action)=>{
  switch (action.type) {
    case "SET_NAME":
    state = {
      ...state,
    name:action.payload
    };
    break;
    case "SET_AGE":
    state = {
    ...state,
    age:action.payload
    };
    break;
    default:break;

  }
  return state;
};

const store  = createStore(userReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
