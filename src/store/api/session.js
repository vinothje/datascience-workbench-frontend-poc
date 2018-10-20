import {getNetworkError, setNetworkSuccess, setNetworkFail} from '../network';

export function apiHandleNetworkError(error) {
    //Microsoft Edge HACK - 401 requests automatically fail and throw TypeMismatchError
    if (error && error.name === 'TypeMismatchError') {
        const {response = {}} = error;
        throw {
            response: {
                ...response,
                status: 401,
            },
        };
    }
    const networkError = getNetworkError();
    setNetworkFail(networkError);
    throw networkError;
}

function processResponseBody(response) {
    setNetworkSuccess();
    if (response.status === 204) {
        // Our nginx server is a liar and sends us a content-type
        // "application/json" for no content responses.
        return Promise.resolve();
    }
    const contentType = response.headers.get('content-type');
    if (contentType) {
        if (contentType.indexOf('application/json') !== -1) {
            return response.json();
        }
        if (contentType.indexOf('text/html') !== -1 ||
            contentType.indexOf('text/plain') !== -1 ||
            contentType.indexOf('text/csv') !== -1) {
            return response.text();
        }
        if (contentType) {
            return response.blob();
        }
    }
    return Promise.resolve();
}

export function apiHandleResponse(response) {
    return processResponseBody(response)
        .then((payload) => {
            if (response.ok) {
                return payload;
            }
            throw {response, payload};
        });
}

export function apiHandleFileResponse(response) {
    const contentDisposition = response.headers.get('content-disposition');
    const isFile = contentDisposition && contentDisposition.includes('attachment');
    const fileName = isFile && contentDisposition.split('filename=')[1].replace(/"/g, '');

    return apiHandleResponse(response)
        .then((content) => ({
            content,
            fileName,
        }));
}

