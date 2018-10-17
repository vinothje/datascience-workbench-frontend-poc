import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';

import {reduxSagaMiddleware, initSagas} from './sagas.js';
import rootReducer from './reducers.js';

export default function configureStore(initialState = {}) {

    const reduxRouterMiddleware = routerMiddleware(hashHistory);
    const reduxThunkMiddleware = thunk;

    const middleware = compose(
        applyMiddleware(reduxThunkMiddleware, reduxSagaMiddleware, reduxRouterMiddleware),
    );
    const store = createStore(rootReducer, initialState, middleware);

    initSagas();

    return store;
}
