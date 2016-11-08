import firebase from '../firebase';

const API_ID = 'M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ';
const API_SECRET = 'TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB';

const DENVER_LAT = 39.739236;
const DENVER_LONG = -104.990251;
const VERSION_DATE = 20161101;

const firebaseRecommendations = firebase.database().ref('recommendations');

export const fetchAllRecommendationsFromFirebase = () => {
  return (dispatch, getState) => {
      let fetchedRecs = [];
      console.log('Running fetchAllRecs');

      firebaseRecommendations.once('value').then(result => {
          result.forEach(rec => {
            fetchedRecs.push(rec.val());
          });

          dispatch({
            type: 'RECEIVE_ALL_REC',
            recommendationList: fetchedRecs
          });
      }).catch(error => {
        console.log('Error fetching all recs');
      });
  };
};

export const submitNewRecommendation = (recData, id=API_ID, secret=API_SECRET, lat=DENVER_LAT, long=DENVER_LONG, date=VERSION_DATE) => {
  console.log('we are here', recData);
  debugger
  return (dispatch) => {
    let newRecommendationKey = firebaseRecommendations.push().key;
    recData.uid=newRecommendationKey;
    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${id}&client_secret=${secret}&ll=${lat},${long}&query=${recData.name}&v=${date}`)
    .then(response => {response.json()})
    .then((json) => {
      dispatch({type: 'RECEIVE_NEW_REC', payload: {json, recData}});
    }).catch(error => {
        console.log(error);
    });
  };
};

// original action
// export const submitNewRecommendation = (recData) => {
//   return (dispatch) => {
//       let newRecommendationKey = firebaseRecommendations.push().key;
//       recData.uid=newRecommendationKey;
//       firebaseRecommendations.child(newRecommendationKey).set(recData).then(() => {
//           dispatch({type: 'RECEIVE_NEW_REC', recData});
//       }).catch(error => {
//           console.log(error);
//       });
//   };
// };

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
//
// export const receiveFood = (foodData) => ({
//   type: 'RECEIVE_VENUE',
//   foodData
// });
//
// export const fetchFood = (id=API_ID, secret=API_SECRET, lat=DENVER_LAT, long=DENVER_LONG, recData, date=VERSION_DATE) => dispatch => {
//   return fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${id}&client_secret=${secret}&ll=${lat},${long}&query=${recData.name}&v=${date}`)
//          .then(response => response.json())
//          .then(json => dispatch(receiveFood(json)));
// };
