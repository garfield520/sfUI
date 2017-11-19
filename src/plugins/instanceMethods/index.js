export default {
  //  ajax methods
  ajax (url, {
    asyn = false
  } = {}) {
    console.log('ajax methods from plugin');
    console.log(url);
  },

  //  http methods
  $http(url, {

  } = {}) {

  },

  utils: {

  }
}
