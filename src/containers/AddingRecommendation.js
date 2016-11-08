import { connect } from 'react-redux';
import {submitNewRecommendation} from '../actions/recommendationFirebase';
import AddingRecommendation from '../components/AddingRecommendation';
import * as actions from '../actions/recommendationFirebase';
import { bindActionCreators } from 'redux';

const mapStateToProps= (state) =>{
  return state
};

// const mapDispatchToProps= (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };
const mapDispatchToProps= (dispatch) => {
  return {
    onSubmit: (content) => {
      dispatch(submitNewRecommendation(content));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddingRecommendation);
