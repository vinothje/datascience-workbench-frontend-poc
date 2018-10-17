import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';

import DevTools from '../components/DevTools.jsx';

import {reduxSagaMiddleware, initSagas} from './sagas.js';
import rootReducer from './reducers.js';

export default function configureStore(initialState = {}) {

    const reduxRouterMiddleware = routerMiddleware(hashHistory);
    const reduxThunkMiddleware = thunk;

    const middleware = compose(
        applyMiddleware(reduxSagaMiddleware, reduxThunkMiddleware, reduxRouterMiddleware),
        DevTools.instrument(),
    );
    const store = createStore(rootReducer, initialState, middleware);

    if (module.hot) {
        module.hot.accept('./reducers.js', () => {
            const nextRootReducer = require('./reducers.js').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    initSagas();

    return store;
}
