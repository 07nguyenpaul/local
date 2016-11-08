const API_ID = 'M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ';
const API_SECRET = 'TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB';

const DENVER_LAT = 39.739236;
const DENVER_LONG = -104.990251;
const VERSION_DATE = 20161101;

export const receiveFood = (foodData) => ({
  type: 'RECEIVE_VENUE',
  foodData
});

export const fetchFood = (id=API_ID, secret=API_SECRET, lat=DENVER_LAT, long=DENVER_LONG, name, date=VERSION_DATE) => dispatch => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${id}&client_secret=${secret}&ll=${lat},${long}&query=${name}&v=${date}`)
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
//   fetch(`https://api.foursquare.com/v2/venues/explore?ll=39.7,-104.9&client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&v=YYYYMMDD`)
//     .then(response => response.json)
// })
//


// post call i want to use
//   fetch(`https://api.foursquare.com/v2/venues/explore?client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&ll=39.7,-104.9&query=search&v=20161107`)


// photos
// https://api.foursquare.com/v2/venues/4b6a137af964a520fbc52be3/photos?client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&v=20161107


//photo url
// https://irs2.4sqi.net/img/general/cap300/5TCVUrc37in_mARxTghGoPQVU5zMlBLmNCsWE28yXII.jpg
