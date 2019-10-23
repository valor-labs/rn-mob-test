import { IState } from '../../../store/reducers';
import { Dispatch } from 'redux';
import { updateSearchRequest } from '../../../store/actions/search-request.actions';
import { connect } from 'react-redux';
import { TextSearch } from './text-search';

const mapStateToProps = (state: IState) => ({
    searchValue: state.searchRequest,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateSearchValue: (data: string) => dispatch(updateSearchRequest(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextSearch);
