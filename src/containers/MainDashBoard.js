import { connect } from 'react-redux';
import MainDashBoard from '../components/MainDashBoard';
import * as actions from '../actions/recommendationFirebase';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actions, dispatch);
};

// const mapDispatchToProps= (dispatch) => {
//   return {
//     onDelete: (id) => {
//       dispatch(deleteRecommendation(id));
//     }
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(MainDashBoard);
