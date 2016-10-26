// App ID
// DtY3I8853pWZROsmTnsuRA
// App Secret
// 9iO7OBt5Xf4cNonO0SE4mqquthn2OfrpGGUaK0grSt4QWFRgwdDVEKlUELwwiabW

const api_key='DtY3I8853pWZROsmTnsuRA';

export const add = (content) => {
  return {
    type: 'ADD',
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
