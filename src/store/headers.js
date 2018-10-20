import {createSelector} from 'reselect';

import {fromLocalStorage} from '../util';

import {
    selectAuthHeaders,
    selectAuthSendJsonHeaders,
    selectAuthReceiveJsonHeaders,
    selectAuthSendReceiveJsonHeaders,
    selectAuthSendTextHeaders,
    selectAuthReceiveTextHeaders,
    selectAuthSendJsonReceiveCsvHeaders,
    selectAuthSendReceiveTextHeaders,
    selectAuthSendTextReceiveJsonHeaders,
    selectAuthSendJsonReceiveTextHeaders,
} from './selectors/api';
import {HEADERS_JSON_RECEIVE, HEADERS_JSON_SEND_RECEIVE, HEADERS_TEXT_RECEIVE} from './constants/api';

const HEADERS_NO_CACHE = {
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
};

function headers(selectHeaders) {
    const selectHeadersNoCache = createSelector(
        (headers) => headers,
        (headers) => ({
            ...headers,
            ...HEADERS_NO_CACHE,
        })
    );
    return (extraHeaders) => {
        const authToken = fromLocalStorage('authToken', null);
        let headers = selectHeadersNoCache(selectHeaders(authToken));
        if (extraHeaders) {
            const initialHeaders = headers;
            Object.entries(extraHeaders).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    if (headers === initialHeaders) {
                        headers = {...headers};
                    }
                    headers[key] = value;
                }
            });
        }
        return headers;
    };
}

export function headersRequestUUIDs(requestUUID, requestParentUUID) {
    let headers;
    if (requestUUID) {
        if (!headers) {
            headers = {};
        }
        headers['X-Request'] = requestUUID;
    }
    if (requestParentUUID || requestUUID) {
        if (!headers) {
            headers = {};
        }
        headers['X-Request-Parent'] = requestParentUUID || requestUUID;
    }
    return headers;
}

export const headersAuth = headers(selectAuthHeaders);
export const headersAuthSendJson = headers(selectAuthSendJsonHeaders);
export const headersAuthReceiveJson = headers(selectAuthReceiveJsonHeaders);
export const headersAuthSendReceiveJson = headers(selectAuthSendReceiveJsonHeaders);
export const headersAuthSendText = headers(selectAuthSendTextHeaders);
export const headersAuthReceiveText = headers(selectAuthReceiveTextHeaders);
export const headersAuthSendJsonReceiveCsv = headers(selectAuthSendJsonReceiveCsvHeaders);
export const headersAuthSendReceiveText = headers(selectAuthSendReceiveTextHeaders);
export const headersAuthSendTextReceiveJson = headers(selectAuthSendTextReceiveJsonHeaders);
export const headersAuthSendJsonReceiveText = headers(selectAuthSendJsonReceiveTextHeaders);
export const headersReceiveJson = headers(() => HEADERS_JSON_RECEIVE);
export const headersSendReceiveJson = headers(() => HEADERS_JSON_SEND_RECEIVE);
export const headersReceiveText = headers(() => HEADERS_TEXT_RECEIVE);
