import {createSelector} from 'reselect';

import {
    HEADERS_JSON_SEND, HEADERS_JSON_RECEIVE, HEADERS_JSON_SEND_RECEIVE,
    HEADERS_TEXT_SEND, HEADERS_TEXT_RECEIVE, HEADERS_TEXT_SEND_RECEIVE,
    HEADERS_TEXT_SEND_JSON_RECEIVE, HEADERS_JSON_SEND_TEXT_RECEIVE,
    HEADERS_JSON_SEND_CSV_RECEIVE,
} from '../constants/api';

export const selectAuthHeaders = createSelector(
    (authToken) => authToken,
    (authToken) => ({
        'X-Authorization': `${authToken}`,
    })
);

const selectAuthHeadersMerge = (baseHeaders) => createSelector(
    selectAuthHeaders,
    (headers) => ({
        ...baseHeaders,
        ...headers,
    })
);

export const selectAuthSendJsonHeaders = selectAuthHeadersMerge(HEADERS_JSON_SEND);
export const selectAuthReceiveJsonHeaders = selectAuthHeadersMerge(HEADERS_JSON_RECEIVE);
export const selectAuthSendReceiveJsonHeaders = selectAuthHeadersMerge(HEADERS_JSON_SEND_RECEIVE);
export const selectAuthSendTextHeaders = selectAuthHeadersMerge(HEADERS_TEXT_SEND);
export const selectAuthReceiveTextHeaders = selectAuthHeadersMerge(HEADERS_TEXT_RECEIVE);
export const selectAuthSendJsonReceiveCsvHeaders = selectAuthHeadersMerge(HEADERS_JSON_SEND_CSV_RECEIVE);
export const selectAuthSendReceiveTextHeaders = selectAuthHeadersMerge(HEADERS_TEXT_SEND_RECEIVE);
export const selectAuthSendTextReceiveJsonHeaders = selectAuthHeadersMerge(HEADERS_TEXT_SEND_JSON_RECEIVE);
export const selectAuthSendJsonReceiveTextHeaders = selectAuthHeadersMerge(HEADERS_JSON_SEND_TEXT_RECEIVE);
