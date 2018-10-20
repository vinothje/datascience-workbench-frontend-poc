
import {omit, isEqual as isDeepEqual} from 'lodash';

export const createReducer = (initialState, reducerMap) => {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          type = _ref.type,
          payload = _ref.payload;

      var reducer = reducerMap[type];
      return reducer ? reducer(state, payload) : state;
    };
}

export const updateState = (state, updates) => {
    if (!Array.isArray(updates)) {
        return state;
    }
    let nextState = state;
    updates.forEach((element) => {
        if (!element) {
            return;
        }
        let update = element;
        switch (typeof element) {
            case 'function':
                update = element(nextState, state);
                if (!update) {
                    // don't update if we didn't return anything.
                    break;
                }
            case 'object': // eslint-disable-line no-fallthrough
                Object.entries(update).forEach(([name, object]) => {
                    if (object === undefined) {
                        if (name in nextState) {
                            nextState = omit(nextState, name);
                        }
                    }
                    else if (nextState[name] !== object) {
                        nextState = {
                            ...nextState,
                            [name]: object,
                        };
                    }
                });
                break;
            default:
        }
    });
    return nextState;
};
