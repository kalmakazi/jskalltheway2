import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';

import {blockingImages} from './ducks/blockingImages';

const reducers = {
  routing: routerReducer,
  blockingImages,
};

export default function getStore(initialState) {
  const createStoreComposables = [
    applyMiddleware(thunk),
  ];

  const createStoreWithMiddleware = compose(...createStoreComposables)(createStore);
  const reducer = combineReducers(reducers);

  return createStoreWithMiddleware(reducer, initialState);
}
