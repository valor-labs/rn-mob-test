import { combineReducers } from 'redux';
import { isClearAvailableReducer } from './is-clear-available.reducer';

export interface IState {
    isClearAvailable: boolean;
}

const rootReducer = combineReducers<IState>({
    isClearAvailable: isClearAvailableReducer,
});

export default rootReducer;
