import {SAVE_ENTRY_REQUEST, FETCH_ENTRY_REQUEST, UPDATE_ENTRY_REQUEST, ENTRY_SUCCESS, ENTRY_FAILURE} from "./entryTypes";
import axios from 'axios';

export const saveEntry = entry => {
    return dispatch => {
        dispatch(saveEntryRequest());
        axios.post("http://localhost:8080/api/entries", entry)
            .then(response => {
                dispatch(entrySuccess(response.data));
            })
            .catch(error => {
                dispatch(entryFailure(error));
            });
    };
};

const saveEntryRequest = () => {
    return {
        type: SAVE_ENTRY_REQUEST
    };
};

const fetchEntryRequest = () => {
    return {
        type: FETCH_ENTRY_REQUEST
    };
};

export const fetchEntry = entryId => {
    return dispatch => {
        dispatch(fetchEntryRequest());
        axios.get("http://localhost:8080/api/entries"+entryId)
            .then(response => {
                dispatch(entrySuccess(response.data));
            })
            .catch(error => {
                dispatch(entryFailure(error));
            });
    };
};

const updateEntryRequest = () => {
    return {
        type: UPDATE_ENTRY_REQUEST
    };
};

export const updateEntry = entry => {
    return dispatch => {
        dispatch(updateEntryRequest());
        axios.put("http://localhost:8080/api/entries", entry)
            .then(response => {
                dispatch(entrySuccess(response.data));
            })
            .catch(error => {
                dispatch(entryFailure(error));
            });
    };
};

const entrySuccess = entry => {
    return {
        type: ENTRY_SUCCESS,
        payload: entry
    };
};

const entryFailure = error => {
    return {
        type: ENTRY_FAILURE,
        payload: error
    };
};