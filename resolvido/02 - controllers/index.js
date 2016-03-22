angular.module('Pokedex', [])

.controller('HomeCtrl', function ($scope) {
    
    $scope.treinador = {
        nome: 'Brock'
    };
    
    $scope.mostrarMensagem = function (treinador) {
        alert(treinador.nome);
    };
})

.controller('ListCtrl', function($scope){
   
    $scope.pokemons = [
        {
            id: 1,
            nome: 'Pikachu',
            stage: 1
        },
        {
            id: 2,
            nome: 'Charmander',
            stage: 1
        },
        {
            id: 3,
            nome: 'Charizard',
            stage: 3
        },
        {
            id: 4,
            nome: 'Blastoise',
            stage: 3
        }
    ];
    
    $scope.selectedPokemon = $scope.pokemons[0];
    
    $scope.addPokemon = function () {
        $scope.pokemons.push({
           nome: 'Pokemon_' + $scope.pokemons.length  
        });
    };
    
    $scope.onSelectPokemon = function () {
        alert($scope.selectedPokemon.nome);  
    };
});