import firebase from '../firebase';

const API_ID = 'M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ';
const API_SECRET = 'TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB';
const API_TOKEN = '3ZSMDDBDC5XTCXXFIYSN5SPRVA4NA1KTJUU5RHN0YJY152PW';

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

export const submitNewRecommendation = (recData,
                                        id=API_ID,
                                        secret=API_SECRET,
                                        token=API_TOKEN,
                                        lat=DENVER_LAT,
                                        long=DENVER_LONG,
                                        date=VERSION_DATE) => {
  return (dispatch) => {
    let newRecommendationKey = firebaseRecommendations.push().key;
    recData.uid=newRecommendationKey;
    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${id}
                                                                  &client_secret=${secret}
                                                                  &ll=${lat},${long}
                                                                  &query=${recData.name}
                                                                  &v=${date}`)
    .then(response => response.json())
    .then((json) => {
      let obj = Object.assign({}, json, recData);
      firebaseRecommendations.child(newRecommendationKey).set(obj);
      dispatch({type: 'RECEIVE_NEW_REC', payload: {obj}});
    })
    .catch(error => {
        console.log(error);
    });
  };
};

export const deleteRecommendation = (uid) =>{
  return (dispatch) => {
    firebaseRecommendations.child(uid).remove().then(() => {
      dispatch({
        type:'DELETE_REC',
        deleteRec: uid
      });
    }).catch(error => {
      console.log('error deleting recommendation', error);
    });
  };
};

export const setSelectedRecommendation = (uid, fetchedRecs) => {
  return {
    type: 'SET_SELECTED_RECOMMENDATION',
    fetchedRecs,
    uid: uid
  };
};
