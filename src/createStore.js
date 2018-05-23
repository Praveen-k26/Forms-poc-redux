import { render } from './index.js'
import Review from './components/todos/Review'
import React, {Component} from 'react';

export default function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action);
    console.log(`the action is`);
    console.log(action);
    <p>{action}</p>
    console.log(`the state is`);
    console.log(state);
    render();
    
  };

  function getState(){
    return state;
    
  };

  return {
    dispatch,
    getState
  };

  
};


