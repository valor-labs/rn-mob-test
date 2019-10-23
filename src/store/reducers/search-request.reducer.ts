import { searchRequestActions, SearchRequestActionsTypes } from '../actions/search-request.actions';

export function searchRequestReducer(state: string = '', action: searchRequestActions): string {
    switch (action.type) {
        case SearchRequestActionsTypes.UPDATE_SEARCH_REQUEST: {
            return action.payload;
        }
        default:
            return state;
    }
}
