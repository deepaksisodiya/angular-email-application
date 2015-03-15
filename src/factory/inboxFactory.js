/**
 * Created by Deepak Sisodiya on 08/03/15.
 */

app.factory('inboxFactory', ['$http', '$location', function($http, $location) {
  "use strict";
  var exports = {};
  exports.getMessages = function() {
    return $http.get('./../../json/emails.json');
  };

  exports.deleteMessage = function(id, index, $scope) {
    $scope.data.emails.splice(index, 1);
  };

  exports.goToMessage = function(id) {
    if(angular.isNumber(id)) {
      console.log('inbox/email/' + id);
      $location.path('/inbox/email/' + id);

    }
  };

  return exports;
}]);
