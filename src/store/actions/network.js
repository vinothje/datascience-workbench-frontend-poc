export const NETWORK_SET_SUCCESSFUL = 'NETWORK_SET_SUCCESSFUL';
export const NETWORK_SET_FAILED = 'NETWORK_SET_FAILED';

export const NETWORK_ERROR_RESET = 'NETWORK_ERROR_RESET';

export const setSuccessful = () => ({
    type: NETWORK_SET_SUCCESSFUL,
    payload: {},
});

export const setFailed = (error) => ({
    type: NETWORK_SET_FAILED,
    payload: {error},
});

export const errorReset = (...errorKeys) => ({
    type: NETWORK_ERROR_RESET,
    payload: {errorKeys},
});
