'use strict';

/**
 * @ngdoc overview
 * @name angcmsApp
 * @description
 * # angcmsApp
 *
 * Main module of the application.
 */
var angcmsApp =
  angular
  .module('angcmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'oc.lazyLoad',
    'ui.router',
    'pascalprecht.translate'
  ])
  .config(
  [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

      // lazy controller, directive and service
      angcmsApp.controller = $controllerProvider.register;
      angcmsApp.directive  = $compileProvider.directive;
      angcmsApp.filter     = $filterProvider.register;
      angcmsApp.factory    = $provide.factory;
      angcmsApp.service    = $provide.service;
      //app.constant   = $provide.constant;
      //app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider) {
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }]);
