import { isClearAvailableActions, SetIsClearAvailableActionTypes } from '../actions/is-clear-available.actions';

export function isClearAvailableReducer(state: boolean = false, action: isClearAvailableActions) {
    switch (action.type) {
        case SetIsClearAvailableActionTypes.SET_IS_CLEAR_AVAILABLE: {
            return action.payload;
        }
        default:
            return state;
    }
}
