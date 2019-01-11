import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from '../reducers/video';
import loadingStatusReducer from '../reducers/loadingStatus';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  const combinedReducers = combineReducers({
    video: videoReducer,
    loadingStatus: loadingStatusReducer,
  });

  const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
