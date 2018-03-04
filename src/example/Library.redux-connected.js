import { connect } from 'react-redux';
import { actionCreators } from '../Library.redux';
import Library from '../Library';

// react-redux connection
const mapStateToProps = state => ({
	integerValue: state.library.integerValue
});
const mapDispatchToProps = dispatch => ({
	increment: () => {
		dispatch(actionCreators.increment());
	}
});
const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(Library);

export default LibraryContainer;