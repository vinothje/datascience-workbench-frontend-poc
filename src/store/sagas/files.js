import {takeEvery, put, call, select} from 'redux-saga/effects';
import {push} from 'react-router-redux';

import * as actions from '../actions/files';
import * as API from '../api/files';

export function *list(action) {
    const files = yield call(API.getFileList);
    console.log('from sagas:', files);
    yield put({type: actions.FILE_LIST_DONE, payload: {files}});
}

export default function *() {
    yield takeEvery(actions.FILE_LIST, list);
}
