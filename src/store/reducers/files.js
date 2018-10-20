import * as actions from '../actions/files';
import {createReducer, updateState} from '../../util/reducer';

const initialState = {
    ids: [],
    objects: {},
};

export default createReducer(initialState,
    {
        [actions.FILE_LIST_DONE]: (state, payload) => {
            console.log({payload});
            return updateState(state, [
                {
                    ids: [1,2,3],
                }
            ]);
        }
    }
);
