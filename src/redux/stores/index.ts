import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(rootSaga);

export default store;