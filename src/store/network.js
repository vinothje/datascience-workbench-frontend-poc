import store from './index';
import {setSuccessful, setFailed} from './actions/network';

export function getNetworkError() {
    return {
        title: 'network error',
        body: 'please contact the administrator',
    };
}

export function setNetworkSuccess() {
    store.dispatch(setSuccessful());
}

export function setNetworkFail(error) {
    store.dispatch(setFailed(error));
}
