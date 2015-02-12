'use strict';

/**
 * @ngdoc overview
 * @name toptalApp
 * @description
 * # toptalApp
 *
 * Main module of the application.
 */
angular
  .module('toptalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAutocomplete',
    'uiGmapgoogle-maps',
    'angularFileUpload',
    'hljs'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      })
      .when('/view', {
        templateUrl: 'view.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
