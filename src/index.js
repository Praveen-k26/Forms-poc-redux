import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './components/todos/Review'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(manageTodo);

export function render(){ 
ReactDOM.render(
    
        <App store={store}/>
     , document.getElementById('root'));

}
store.dispatch({type: '@@INIT'});

