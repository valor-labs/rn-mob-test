export enum SearchRequestActionsTypes {
    UPDATE_SEARCH_REQUEST = 'UPDATE_SEARCH_REQUEST',
}

type UpdateSearchRequestAction = {
    type: typeof SearchRequestActionsTypes.UPDATE_SEARCH_REQUEST;
    payload: string;
};

export function updateSearchRequest(payload: string): UpdateSearchRequestAction {
    return {
        type: SearchRequestActionsTypes.UPDATE_SEARCH_REQUEST,
        payload,
    };
}

export type searchRequestActions = UpdateSearchRequestAction;
