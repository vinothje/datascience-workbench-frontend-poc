export const METHOD_GET = 'GET';
export const METHOD_PUT = 'PUT';
export const METHOD_POST = 'POST';
export const METHOD_DELETE = 'DELETE';

export const MIME_TYPE_JSON = 'application/json';
export const MIME_TYPE_TEXT = 'text/plain';
export const MIME_TYPE_CSV = 'text/csv';

export const HEADERS_JSON_SEND = {
    'Content-Type': MIME_TYPE_JSON,
};

export const HEADERS_JSON_RECEIVE = {
    'Accept': MIME_TYPE_JSON,
};

export const HEADERS_JSON_SEND_RECEIVE = {
    ...HEADERS_JSON_SEND,
    ...HEADERS_JSON_RECEIVE,
};

export const HEADERS_TEXT_SEND = {
    'Content-Type': MIME_TYPE_TEXT,
};

export const HEADERS_TEXT_RECEIVE = {
    'Accept': MIME_TYPE_TEXT,
};

export const HEADERS_TEXT_SEND_RECEIVE = {
    ...HEADERS_TEXT_SEND,
    ...HEADERS_TEXT_RECEIVE,
};

export const HEADERS_TEXT_SEND_JSON_RECEIVE = {
    ...HEADERS_TEXT_SEND,
    ...HEADERS_JSON_RECEIVE,
};

export const HEADERS_JSON_SEND_TEXT_RECEIVE = {
    ...HEADERS_JSON_SEND,
    ...HEADERS_TEXT_RECEIVE,
};

export const HEADERS_CSV_RECEIVE = {
    'Accept': MIME_TYPE_CSV,
};

export const HEADERS_JSON_SEND_CSV_RECEIVE = {
    ...HEADERS_JSON_SEND,
    ...HEADERS_CSV_RECEIVE,
};
