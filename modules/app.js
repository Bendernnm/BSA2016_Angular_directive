(function () {
    angular.module('peopleModule', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/peopleList', {
                    directive: 'peopleList'
                })
                .when('/details:firstName,lastName,eMail', {
                    directive: 'detailsAbout',
                    name: 'Details'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})()