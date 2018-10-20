import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import files from '../store/reducers/files';

export default combineReducers({
    routing,
    form,

    files,
});
