import { connect } from 'react-redux';
import { ClearButton } from './clear-button';
import { IState } from '../../store/reducers';
import { Dispatch } from 'redux';
import { updateSearchRequest } from '../../store/actions/search-request.actions';

const mapStateToProps = (state: IState) => ({
    isVisible: !!state.searchRequest,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearSearch: (data: string) => dispatch(updateSearchRequest(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClearButton);
