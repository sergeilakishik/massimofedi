import { createStore, applyMiddleware, compose, } from 'redux';
import { createLogger, } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
// import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();

const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

// sagaMiddleware.run(rootSaga);

export default store;
