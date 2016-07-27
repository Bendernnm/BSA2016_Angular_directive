(function() {
    angular
        .module('peopleModule', [])
        .directive('myButton', myButton);

    myButton.$inject = [
        '$window'
    ];

    function myButton($window) {
        return {
            restrict: 'E',
            scope: {
                href: '=href'
            },
            transclude: true,
            // replace: true,
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    console.log(attrs);
                    $window.open(scope.href);
                    // scope.href = '123';
                });
            },
            template: '<button ng-transclude></button>'
        };
    }
})();