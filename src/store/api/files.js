import {METHOD_GET, METHOD_POST, METHOD_PUT, METHOD_DELETE} from '../constants/api';
import {
    headersAuthReceiveJson,
    headersAuthSendReceiveJson,
    headersAuthSendJson,
    headersAuth,
    headersRequestUUIDs,
} from '../headers';

import {apiHandleNetworkError, apiHandleResponse} from './session';

let getFileList = () =>
    fetch('v1/files', {
        method: METHOD_GET,
        headers: headersAuthReceiveJson(),
    })
        .catch(apiHandleNetworkError)
        .then(apiHandleResponse);

if (process.env.NODE_ENV !== 'production') {
    const mock = require('../../mock/files');
     getFileList = mock.getFileList;
}

export {
    getFileList,
};
