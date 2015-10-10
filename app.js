'use strict';

// Declare app level module which depends on views, and components
angular.module('photoStore', [
  'ngRoute',
  'photoStore.view1',
  'photoStore.view2',
  'photoStore.photos'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/photos'});
}]);
