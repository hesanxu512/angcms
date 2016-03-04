'use strict';

/**
 * Config for the router
 */
angular.module('angcmsApp')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {

          $urlRouterProvider
              .otherwise('/apps/contact');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'views/cmsmain.html',
                  controller: 'CmsCtrl',
                  controllerAs: 'main'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'views/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['scripts/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'views/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['scripts/controllers/chart.js']);
                    }]
                  }
              })
              .state('apps', {
                  abstract: true,
                  url: '/apps',
                  templateUrl: 'views/cmsmain.html',
                  controller: 'CmsCtrl',
                  controllerAs: 'main'
              })
              .state('apps.note', {
                  url: '/note',
                  templateUrl: 'views/apps_note.html',
                  controller: 'NoteCtrl',
                  controllerAs: 'note'
              })
              .state('apps.contact', {
                  url: '/contact',
                  templateUrl: 'views/apps_contact.html',
                  controller: 'ContactCtrl',
                  controllerAs: 'contact'
              });
      }
    ]
  );
