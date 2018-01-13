const app = angular.module("AuthApp", ["ngRoute"])

angular.module("AuthApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider.
        //Displays welcome page
        when('/partials/home', {
            templateUrl: 'lib/partials/home.html',
            controller: 'ctrl',
        })
        //Displays contact page
        .when('/partials/contact', {
            templateUrl: 'lib/partials/contact.html',
            controller: 'contactCtrl',
        })
        .when('/partials/resume', {
            templateUrl: 'lib/partials/resume.html',
            controller: 'resumeCtrl',
        })
        .when('/partials/projects', {
            templateUrl: 'lib/partials/projects.html',
            controller: 'resumeCtrl',
        })
        .otherwise('/partials/home')
})