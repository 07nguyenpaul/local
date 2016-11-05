const API_ID = M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ;
const API_SECRET = TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB;

export const add = (content) => {
  return {
    type: 'ADD',
    content,
  };
};

export const remove = (content) => {
  return {
    type: 'REMOVE',
    content,
  };
};

export const receiveFood = (foodData) => ({
  // action object
});

export const fetchFood = () => dispatch => {
  // return fetch API call

};

export const receiveHike = (hikeData) => ({
  // action object
});


export const fetchHike= options => dispatch => {
  // return fetch API call
};


// export const findVenus = params => ({
//   fetch(`https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=M3FIBXUYIFX4DR3TSKHKYWXB4JI5XMIE2GO3WLUGXZ4KDRIZ&client_secret=TV1WF5HQLTNG4FJWDU0O3VHQAZJMXYYTWE0RPK4TJLMSQWOB&v=YYYYMMDD`)
//     .then(response => response.json)
// })
//
//
// https://api.foursquare.com/v2/venues/suggestCompletion?ll=39.7,-104.9&query=bar&oauth_token=3ZSMDDBDC5XTCXXFIYSN5SPRVA4NA1KTJUU5RHN0YJY152PW&v=20161105
// get geolocation and set as param
// oauth token here might be default where there doesnt have to be a user logged in through 4square
