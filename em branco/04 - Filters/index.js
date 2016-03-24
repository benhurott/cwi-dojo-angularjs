angular.module('Herois', [])

.controller('ListaCtrl', function ($scope) {
    $scope.herois = [
        {
            id: 1,
            nome: 'Batman',
            criadora: 'DC'
        },
        {
            id: 2,
            nome: 'Superman',
            criadora: 'DC'
        },
        {
            id: 3,
            nome: 'Hulk',
            criadora: 'Marvel'
        }
    ];
});