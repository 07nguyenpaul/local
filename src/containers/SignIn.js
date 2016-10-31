import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import SignIn from '../components/SignIn';

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
