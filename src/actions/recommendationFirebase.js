import firebase from '../firebase';
// import { BrowserRouter } from 'react-router';

const firebaseRecommendations = firebase.database().ref('recommendations');

export const fetchAllRecommendationsFromFirebase = () => {
  return (dispatch, getState) => {
      let fetchedRecs = [];
      console.log('Running fetchAllRecs');

      firebaseRecommendations.once('value').then(result => {
          result.forEach(rec => {
            fetchedRecs.push(rec.val());
          });

          console.log(fetchedRecs);
          dispatch({
            type: 'RECEIVE_ALL_REC',
            recommendationList: fetchedRecs
          });
      }).catch(error => {
        console.log('Error fetching all recs');
      });
  };
};

export const submitNewRecommendation = (recData) => {
  return (dispatch) => {
      let newRecommendationKey = firebaseRecommendations.push().key;
      recData.uid=newRecommendationKey;
      firebaseRecommendations.child(newRecommendationKey).set(recData).then(() => {
          dispatch({type: 'RECEIVE_NEW_REC', recData});
      }).catch(error => {
          console.log(error);
      });
  };
};

export const deleteRecommendation = (uid) =>{
  return (dispatch, getState) => {
    firebaseRecommendations.child(uid).remove().then(() => {
      dispatch({
        type:'DELETE_REC',
        deleteRec: uid
      });
    }).catch(error => {
      console.log('error deleting recommendation');
    });
  };
};

export const setSelectedRecommendation = (uid) => {
  return {
    type: 'SET_SELECTED_RECOMMENDATION',
    uid: uid
  };
};
