export enum SetIsClearAvailableActionTypes {
    SET_IS_CLEAR_AVAILABLE = 'SET_IS_CLEAR_AVAILABLE',
}

type SetIsClearAvailableAction = {
    type: typeof SetIsClearAvailableActionTypes.SET_IS_CLEAR_AVAILABLE;
    payload: boolean;
};

export function setIsClearAvailable(payload: boolean): SetIsClearAvailableAction {
    return {
        type: SetIsClearAvailableActionTypes.SET_IS_CLEAR_AVAILABLE,
        payload,
    };
}

export type isClearAvailableActions = SetIsClearAvailableAction;
