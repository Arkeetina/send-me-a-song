import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from '../reducers/video';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      video: videoReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
