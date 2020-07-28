import * as types from '../actions/types';

const searchInitState = {
    query: '',
};

const suggestionInitState = {
    pending: true,
    suggestions: [],
    error: null
};

const menuInitState = {
    open: false,
    anchorEl: null
};

export const search = (state = searchInitState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}

export const suggestion = (state = suggestionInitState, action) => {
    switch (action.type) {
        case types.FETCH_SUGGESTION_PENDING:
            return {
                ...state,
                pending: true
            };
        case types.FETCH_SUGGESTION_SUCCESS:
            return {
                ...state,
                pending: false,
                suggestions: action.payload
            };
        case types.FETCH_SUGGESTION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;
        }
}

export const suggestionMenu = (state = menuInitState, action) => {
    switch (action.type) {
        case types.OPEN_SUGGESTION_MENU:
            return {
                open: true,
                anchorEl: action.payload
            };
        case types.CLOSE_SUGGESTION_MENU:
            return {
                open: false,
                anchorEl: action.payload
            };
        default:
            return state;
        }
}

export default search;