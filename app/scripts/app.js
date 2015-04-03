'use strict';

angular
  .module('patron', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngResource', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
