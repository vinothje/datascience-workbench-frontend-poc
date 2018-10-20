import sagaMiddleware from 'redux-saga';
import {fork} from 'redux-saga/effects';

export const reduxSagaMiddleware = sagaMiddleware();

export function initSagas() {
    reduxSagaMiddleware.run(function *sagas() {
        yield fork(require('./sagas/files').default);
    });
}
