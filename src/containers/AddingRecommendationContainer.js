import { connect } from 'react-redux';
import { add } from '../actionCreators';
import AddingRecommendation from '../components/AddingRecommendation';

const mapDispatchToProps=(dispatch) => {
  return {
    onSubmit: (content) => {
      dispatch(add(content));
    }
  };
};

let Add = connect(null, mapDispatchToProps)(AddingRecommendation);

export default Add;
