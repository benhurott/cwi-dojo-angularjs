angular.module('locadora', []);


angular.module('locadora').controller('ListagemJogosCtrl', function ($scope) {
    
    var jogos = [
        { id: 1, nome: 'Super Mario' },
        { id: 2, nome: 'Zelda' },
        { id: 3, nome: 'Super Metroid' }
    ];

    $scope.jogos = jogos;

    $scope.selecionarJogo = function (jogo) {
        jogos.forEach(function (j) {
            j.selecionado = false;
        });

        jogo.selecionado = true;
    };
});