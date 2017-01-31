





function Jugador(nickname, nom, posicio, punts) {

    this.nickname = nickname;
    this.nom = nom;
    this.posicio = posicio;
    this.punts = punts;

    this.updateJugador = function (param) {
        this.nickname = param.nickname || this.nickname;
        this.nom = param.nom || this.nom;
        this.posicio = param.posicio || this.posicio;
        this.punts = param.punts || this.punts;
    };

}
function Equipo() {
    this.nom;
    this.victories;
    this.derrotes;
    this.tipusJoc;
    this.jugadors = [];


    this.addPlayer = function (jugador) {
//         this.jugadors[jugador.nom] = jugador;
        this.jugadors.push(jugador);
    };
    this.getPlayer = function (nickname) {
        for (var key in this.jugadors) {
            if ((this.jugadors[key].nickname) === (nickname)) {
                return this.jugadors[key];
            }
        }






    };
    this.delPlayer = function (nickname) {
        for (var i = 0; jugadors.length(); i++) {
            if (jugadors[i].getNickname().equals(nickname)) {


                jugadors.splice(i, 1);

            }
        }
    };
    this.getPlayerMaxPunts = function () {
        var max = new Jugador("", "", "", 0);
        for (var key in this.jugadors) {
            if (this.jugadors[key].punts > max.punts) {
                max = this.jugadors[key];




            }
        }
        return max;
    };


}

var jugadorPrueba = new Jugador;

jugadorPrueba.nickname = "petu";
jugadorPrueba.nom = "pedro";
jugadorPrueba.posicio = "alero";
jugadorPrueba.punts = 12;

var jugadorPrueba2 = new Jugador;

jugadorPrueba2.nickname = "petu2";
jugadorPrueba2.nom = "pedro2";
jugadorPrueba2.posicio = "alero2";
jugadorPrueba2.punts = 5;




var equipoPrueba = new Equipo;


equipoPrueba.nom = "CEEUROPA";
equipoPrueba.victories = 12;
equipoPrueba.derrotes = 9;
equipoPrueba.tipusJoc = "futbol";

equipoPrueba.addPlayer(jugadorPrueba);
equipoPrueba.addPlayer(jugadorPrueba2);




document.write('<br />Nompre Equipo: ');
document.write(equipoPrueba.nom);
document.write('<br />Equipo Victories: ');
document.write(equipoPrueba.victories);
document.write('<br />Equipo Derrotes: ');
document.write(equipoPrueba.derrotes);
document.write('<br />Equipo TipusJoc: ');
document.write(equipoPrueba.tipusJoc);
document.write('<br />Jugador: ');
//document.write(equipoPrueba.getPlayer("petu").nom);
document.write(equipoPrueba.getPlayer("petu").nom);
document.write('<br />Jugador con más puntos: ');
document.write(equipoPrueba.getPlayerMaxPunts().punts);

jugadorPrueba2.updateJugador({"punts": 30});

document.write('<br />Jugador con más puntos UPDATE:');
document.write(equipoPrueba.getPlayerMaxPunts().punts);

