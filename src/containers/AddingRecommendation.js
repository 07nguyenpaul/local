import { connect } from 'react-redux';
import { add } from '../actions/actionCreators';
import AddingRecommendation from '../components/AddingRecommendation';

const mapStateToProps=(state) =>{
  return state;
};

const mapDispatchToProps=(dispatch) => {
  return {
    onSubmit: (content) => {
      dispatch(add(content));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddingRecommendation);
