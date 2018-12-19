var app = angular.module('angular',["ngRoute"])
app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
   $routeProvider.when('/',{
      templateUrl: './views/feedback.html',
      controller: 'feedbackController'
  })
 
  $locationProvider.html5Mode({
    enabled: true,
   requireBase: false
  });
}]);