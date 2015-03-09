/**
 * Created by Deepak Sisodiya on 08/03/15.
 */

app.controller('inboxController', ['$scope', 'inboxFactory', function ($scope, inboxFactory) {
  $scope.meta = {
    title : "My Inbox"
  };
  inboxFactory.getMessages()
    .success(function(data, status) {
      console.log("Successful : ", status);
      $scope.data = {
        emails : data
      };
    });

  $scope.deleteMessage = function(id, index) {
    inboxFactory.deleteMessage(id, index, $scope)
  };

  $scope.goToMessage = function(id) {
    inboxFactory.goToMessage(id);
  };

}]);