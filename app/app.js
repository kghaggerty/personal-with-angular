const app = angular.module("AuthApp", ["ngRoute"])

angular.module("AuthApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider.
        when('/partials/home', {
            templateUrl: 'lib/partials/home.html',
            controller: 'ctrl',
        })
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
        .when('/partials/bleep', {
            templateUrl: 'lib/partials/bleep.php',
        })
        .otherwise('/partials/home')
})