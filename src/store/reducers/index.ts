import { combineReducers } from 'redux';
import { searchRequestReducer } from './search-request.reducer';

export interface IState {
    searchRequest: string;
}

const rootReducer = combineReducers<IState>({
    searchRequest: searchRequestReducer,
});

export default rootReducer;
