import { connect } from 'react-redux';
import {submitNewRecommendation} from '../actions/recommendationFirebase';
import AddingRecommendation from '../components/AddingRecommendation';

const mapStateToProps= (state) =>{
  return state
};

const mapDispatchToProps= (dispatch) => {
  return {
    onSubmit: (content) => {
      dispatch(submitNewRecommendation(content));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddingRecommendation);
