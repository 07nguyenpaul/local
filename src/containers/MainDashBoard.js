import { connect } from 'react-redux';
import MainDashBoard from '../components/MainDashBoard';
//import * as actions from '../actions/recommendationFirebase';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 //return bindActionCreators(actions, dispatch);
 return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDashBoard);
