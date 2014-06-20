'use strict';

var app = angular.module('calendarApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'calendarApp.controllers',
  'calendarApp.directives',
  'calendarApp.filters',
  'calendarApp.services'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'FrameController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
