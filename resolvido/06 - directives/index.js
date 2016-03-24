angular.module('Pokedex', [])

.controller('FormCtrl', function($scope) {

    $scope.model = {
        dataNascimento: new Date()
    };
    
    $scope.alerta = function() {
        alert('ROBIN!!!!');
    }
    
    $scope.viloes = [
        { id: 1, nome: 'Pinguin'},
        { id: 2, nome: 'Coringa'}  
    ];
    
    $scope.matarVilao = function (vilao) {
        alert('Adeus ' + vilao.nome);
    };
})

.directive('tabelao', function(){
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'tabelaoTpl',
        scope: {
            lista: '=',
            deletar: '&'
        },
        link: function(scope, elm, attrs) {
            scope._deletar = scope.deletar();
        }
    };
})


.directive('calendar', function(){
  
    return {
        restrict: 'E',
        template: '<input type="date"/>',
        replace: true,
        link: function(scope, elm, attrs) {
            
            elm.bind('click', function(){
               alert('BATMAN!!!!'); 
            });
        }
    };
})


.directive('idoso', function(){
   
   return {
       restrict: 'A',
       require: 'ngModel',
       link: function(scope, elm, attrs, ctrl) {
           ctrl.$validators.idoso = function(modelValue, viewValue) {
               
               if(ctrl.$isEmpty(modelValue)) {
                   return true;
               }
               
               if(angular.isDate(modelValue)) {
                   var age = calculateAge(modelValue);
                   return age >= 60;
               }
               
               return false;
           }
       }
   };
});

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

