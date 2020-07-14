import {combineReducers, createStore } from 'redux';


import { composeWithDevTools } from 'redux-devtools-extension'; 


import cart from './cart';
import categories from './Categories';


let reducers = combineReducers({ categories , cart});


const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();