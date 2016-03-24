angular.module('Herois', [])

.controller('CadastroCtrl', function ($scope) {
    
    $scope.heroi = {
        nome: '',
        dataNasc: new Date(),
        criadoPor: 'DC'
    };
    
    $scope.opcoesCriadoPor = [
        { val: 'DC', desc: 'DC' },
        { val: 'MV', desc: 'MARVEL' }
    ]
});