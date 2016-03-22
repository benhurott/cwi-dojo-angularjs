angular.module('Heroes', [])

.controller('ListCtrl', function ($scope) {
    
    $scope.selectedHero = null;
    
    $scope.heroes = [
        {
            id: 1,
            nome: 'Batman',
            by: 'DC'
        },
        {
            id: 2,
            nome: 'Superman',
            by: 'DC'
        },
        {
            id: 3,
            nome: 'Hulk',
            by: 'Marvel'
        }
    ];
    
    
});