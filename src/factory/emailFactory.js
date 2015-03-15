/**
 * Created by Deepak Sisodiya on 09/03/15.
 */

app.factory('emailFactory', ['$http', '$stateParams', function($http, $stateParams) {
  "use strict";
  var exports = {};
  exports.getMessages = function() {
  console.log($stateParams.id);
  if($stateParams.id) {
    return $http.get('./../json/emails/' + $stateParams.id + '.json');
  }
  };
  return exports;
}]);