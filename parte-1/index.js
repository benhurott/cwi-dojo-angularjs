angular.module('locadora', []);


angular.module('locadora').controller('ListagemJogosCtrl', function ($scope) {
    
    var categorias = [
        { id: 1, nome: 'Aventura' },
        { id: 2, nome: 'RPG' }
    ];

    var jogos = [
        { id: 1, nome: 'Super Mario', categoria: "aventura" },
        { id: 2, nome: 'Zelda', categoria: "aventura" },
        { id: 3, nome: 'Super Metroid', categoria: "aventura" },
        { id: 4, nome: 'Final Fantasy', categoria: "RPG" },
    ];

    var novoJogoParaEdicao = {
        nome: '',
        categoria: categorias[0]
    };

    $scope.categorias = categorias;
    $scope.jogos = jogos;
    
    $scope.jogoEmEdicao = angular.copy(novoJogoParaEdicao);

    $scope.resetarNome = function ($event) {
        if($event.keyCode === 27) {
            $scope.frmJogo.nome.$rollbackViewValue();
        }
    };

    $scope.verificarNome = function() {
        var valid = $scope.jogoEmEdicao.nome !== 'batman'; 
        $scope.frmJogo.nome.$setValidity('jogomuitoruim', valid);
    };

    $scope.selecionarJogo = function (jogo) {
        jogos.forEach(function (j) {
            j.selecionado = false;
        });

        jogo.selecionado = true;
    };

    $scope.salvarJogo = function() {
        if($scope.frmJogo.$valid) {
            var proximoId = $scope.jogos[$scope.jogos.length -1].id + 1;
            $scope.jogoEmEdicao.id = proximoId;

            $scope.jogos.push($scope.jogoEmEdicao);
            $scope.jogoEmEdicao = angular.copy(novoJogoParaEdicao);
            $scope.frmJogo.$setPristine();
        }
    };

});