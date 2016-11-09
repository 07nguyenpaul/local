import { connect } from 'react-redux';
import DetailedRecommendation from '../components/DetailedRecommendation';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recommendationFirebase';


const mapStateToProps = (state) => {
  console.log(state.recommendation.data);
  return {
    recList: state,
    selectedRec: state.recommendation.selectedRec
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedRecommendation);
