import { connect } from 'react-redux';
import MainDashBoard from '../components/MainDashBoard';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDashBoard);
