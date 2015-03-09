/**
 * Created by Deepak Sisodiya on 08/03/15.
 */

var app = angular.module("myApp", ['ui.router', 'ngSanitize']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/inbox');
  $stateProvider
    .state('inbox', {
      url : '/inbox',
      templateUrl : './src/view/inbox.html',
      controller : 'inboxController'
    })
    .state('inbox/email/:id', {
      url : '/inbox/email/:id',
      templateUrl : './src/view/email.html',
      controller : 'emailController'
    })
});