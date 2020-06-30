import {SAVE_ENTRY_REQUEST, FETCH_ENTRY_REQUEST, UPDATE_ENTRY_REQUEST, ENTRY_SUCCESS, ENTRY_FAILURE} from "./entryTypes";

const initialState = {
    entry: '', error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_ENTRY_REQUEST:
            return {
                ...state
            };
        case FETCH_ENTRY_REQUEST:
            return {
                ...state
            };
        case UPDATE_ENTRY_REQUEST:
            return {
                ...state
            };
        case ENTRY_SUCCESS:
            return {
                entry: action.payload,
                error: ''
            };
        case ENTRY_FAILURE:
            return {
                entry: '',
                error: action.payload
            };
        default: return state;
    }
};

export default reducer;