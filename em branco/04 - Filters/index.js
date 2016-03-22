angular.module('Heroes', [])

.controller('ListCtrl', function ($scope) {
    $scope.heroes = [
        {
            id: 1,
            name: 'Batman',
            by: 'DC'
        },
        {
            id: 2,
            name: 'Superman',
            by: 'DC'
        },
        {
            id: 3,
            name: 'Hulk',
            by: 'Marvel'
        }
    ];
});