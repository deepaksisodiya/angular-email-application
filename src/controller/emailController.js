/**
 * Created by Deepak Sisodiya on 09/03/15.
 */

app.controller('emailController', ['$scope', 'emailFactory', function ($scope, $emailFactory) {

  $emailFactory.getMessages()
    .success(function(data, status) {
      console.log("Successful : ", status);
      $scope.data = {
        email : data
      };
    });

}]);