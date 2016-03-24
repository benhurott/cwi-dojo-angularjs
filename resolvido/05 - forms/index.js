angular.module('Pokedex', [])

.controller('FormCtrl', function ($scope) {
    
    $scope.cadastro = {
        nome: '',
        dataNascimento: new Date(),
        sexo: 'M'  
    };
    
    $scope.opcoesSexo = [
        { val: 'M', desc: 'Masculino' },
        { val: 'F', desc: 'Feminino' }  
    ];
    
    $scope.verificarNome = function () {
        if(angular.isDefined($scope.cadastro.nome)) {
            var valid = !($scope.cadastro.nome.indexOf('Y') === 0);
            $scope.frmCadastro.cNome.$setValidity('nomeinvalido', valid);
        }
    };
    
    $scope.resetarNome = function (e) {
        if(e.keyCode == 27) {
            $scope.frmCadastro.cNome.$rollbackViewValue();
        }
    };
    
    $scope.enviar = function () {
        if($scope.frmCadastro.$valid){
            console.log('VALIDO');   
        }
        else {
            console.log('KAKAROTOOOOO!!!!');
        }  
    };
});