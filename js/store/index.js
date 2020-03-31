import {compose,applyMiddleware,createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware } from '../navigators/AppNavigators';
import reducers from '../reducer';
import rootSaga from '../saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
	middleware,
	sagaMiddleware
];
// mount it on the Store
const store = createStore(
	reducers, 
	compose(applyMiddleware(...middlewares))
);
// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
