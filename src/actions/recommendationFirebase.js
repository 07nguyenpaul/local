import firebase from 'firebase';

const firebaseRecommendations = firebase.database().ref('recommendations');

export const fetchAllRecommendationsFromFirebase = () => {
    return (dispatch, getState) => {
        let fetchedRec = [];

        firebaseRecommendations.once('value').then(result => {
            result.forEach(rec => {
                fetchedRec.push(rec.val());
            });

            dispatch({type: 'RECEIVE_ALL_REC', fetchedRec});
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
