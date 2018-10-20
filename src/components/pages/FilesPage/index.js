import {connect} from 'react-redux';
import {push as pushHistory} from 'react-router-redux';
import {bindActionCreators} from 'redux';

import {list} from '../../../store/actions/files';

import FilesPageComponent from './FilesPage.jsx';

export const FilesPage = connect(
    (state, props) => ({

    }),
    (dispatch) => ({
        actions: bindActionCreators({
            getFileList: list,
        }, dispatch),
    })
)(FilesPageComponent);
