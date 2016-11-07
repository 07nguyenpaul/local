const API_ID = M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ;
const API_SECRET = TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB;
const API_TOKEN = 3ZSMDDBDC5XTCXXFIYSN5SPRVA4NA1KTJUU5RHN0YJY152PW&v=20161105;

const DENVER_LAT = 39.739236;
const DENVER_LONG = -104.990251;

export const receiveFood = (foodData) => ({
  type: 'RECEIVE_VENUE',
  foodData
});

export const fetchFood = (lat=DENVER_LAT, long=DENVER_LONG, venue, token=API_TOKEN) => dispatch => {
  return fetch(`https://api.foursquare.com/v2/venues/suggestCompletion?ll=${lat},${long}&query=${venue}&oauth_token=${token}`)
         .then(response => response.json())
         .then(json => dispatch(receiveFood(json)));
};

// export const receiveHike = (hikeData) => ({
//   // action object
// });
//
//
// export const fetchHike= options => dispatch => {
//   // return fetch API call
// };


// export const findVenus = params => ({
//   fetch(`https://api.foursquare.com/v2/venues/search?ll=39.7,-104.9&client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&v=YYYYMMDD`)
//     .then(response => response.json)
// })
//
//
// https://api.foursquare.com/v2/venues/suggestCompletion?ll=39.7,-104.9&query=bar&oauth_token=3ZSMDDBDC5XTCXXFIYSN5SPRVA4NA1KTJUU5RHN0YJY152PW&v=20161105
// get geolocation and set as param
// oauth token here might be default where there doesnt have to be a user logged in through 4square


//   fetch(`https://api.foursquare.com/v2/venues/search?client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&ll=39.7,-104.9&query=search&v=20161107`)


// photos
// https://api.foursquare.com/v2/venues/4b6a137af964a520fbc52be3/photos?client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&v=20161107


//photo url
// https://irs2.4sqi.net/img/general/300x500/5TCVUrc37in_mARxTghGoPQVU5zMlBLmNCsWE28yXII.jpg

// https://irs3.4sqi.net/img/user/BK4FJYE3J4T5PGT0.jpg
