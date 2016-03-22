angular.module('Pokedex', [])

.controller('ListCtrl', function ($scope) {
    
    $scope.searchText = {};
    
    $scope.pokemons = [
        {
            name: 'Pikachu',
            group: 'Basic',
            value: 10
        },
        {
            name: 'Charmander',
            group: 'Basic',
            value: 20
        },
        {
            name: 'Squirtle',
            group: 'Basic',
            value: 30
        },
        {
            name: 'Blastoise',
            group: 'Fucker',
            value: 40
        }
    ];
     
})

.filter('moneyView', function(){
   return function(value, symbol){
       return symbol + ': ' + value;
   };
});