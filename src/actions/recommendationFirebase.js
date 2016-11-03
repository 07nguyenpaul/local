import { BrowserRouter } from 'react-router';

import firebase from '../firebase';

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

      firebaseRecommendations.child(newRecommendationKey).set(recData).then(() => {
          dispatch({type: 'RECEIVE_NEW_REC', recData});
      }).catch(error => {
          console.log('error saving recommendation to firebase', error);
      });
  };
};
//
// export const deleteRecommendationSuccess = (recommendation) => {
//   return {
//     type: 'DELETE_REC',
//     recommendation
//   };
// };

export const deleteRecommendation = (recommendation) =>{
  console.log('lets delete something');
  return (dispatch, getState) => {
    firebaseRecommendations.remove().then(() => {
      BrowserRouter.push('./App');
      dispatch({
        type:'DELETE_REC',
        deleteRec: recommendation
      });
    }).catch(error => {
      console.log('error deleting recommendation');
    });
  };
};
