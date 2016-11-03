import { connect } from 'react-redux';
import {deleteRecommendation} from '../actions/recommendationFirebase';
import MainDashBoardCard from '../components/MainDashBoardCard';

const mapStateToProps= (state) =>{
  return state;
};

const mapDispatchToProps= (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteRecommendation(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDashBoardCard);
