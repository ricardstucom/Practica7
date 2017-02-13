var app = angular.module("angularArrayApp", []);
app.controller("control", ["$scope", "datos"
    , function ($scope, datos) {

       
        $scope.equipos = datos.equipos;

        $scope.addEquipo = function(){
            datos.createEquipo($scope.equipon,$scope.equipov,$scope.equipod,$scope.equipoj);
        };
        $scope.changePlayer = function(){
            //TODO update no va
            datos.createJugador($scope.jugadorni, $scope.jugadorn, $scope.jugadorf, $scope.jugadorp,$scope.selected);
        };
        $scope.borrar = function (nickname,selected) {
            datos.delPlayer(nickname,selected);
        };
        $scope.rellenar = function (index,equipo) {
            var p = $scope.equipos[equipo].jugadors[index];

            $scope.jugadorn = p.nombre;
            $scope.jugadorni = p.nick;
            $scope.jugadorp = p.puntos;
            $scope.jugadorf = p.posicio;
        };


        $scope.ordenar = function(objeto){
            $scope.orden = false;
            $scope.objeto = objeto;

            if($scope.objeto === true){
                $scope.orden = false;
            }else{
                $scope.orden = true;
            }
        };
    }]);
