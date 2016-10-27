import { connect } from 'react-redux';
import { add } from '../actions/actionCreators';
import AddingRecommendation from '../components/AddingRecommendation';

const mapDispatchToProps=(dispatch) => {
  return {
    onSubmit: (content) => {
      dispatch(add(content));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddingRecommendation);
