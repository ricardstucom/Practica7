





function Jugador(nickname, nom, posicio, punts) {

    this.nickname = nickname ||"";
    this.nom = nom ||"";
    this.posicio = posicio||"";
    this.punts = punts||0;

    this.updateJugador = function (nom,posicio,punts) {
        this.nom=nom;
        this.posicio=posicio;
        this.punts=punts;
        return this;
    };

}
function Equipo(nom, victories, derrotes, tipusJoc) {
    this.nom = nom || "";
    this.victories = victories ||0;
    this.derrotes=derrotes || 0;
    this.tipusJoc= tipusJoc ||"";
    this.jugadors = [];


    this.addPlayer = function (jugador) {

        this.jugadors.push(jugador);
    };
    this.getPlayer = function (nickname) {
        var jugador = new Jugador();
        for (var key in this.jugadors) {
            if ((this.jugadors[key].nickname) === (nickname)) {
                return this.jugadors[key];
            }
        }

return jugador;




    };
    this.delPlayer = function (nickname) {
        for (var key in this.jugadors) {
            if (this.jugadors[key].nickname === nickname) {
            this.jugadors.splice(key,1);

              

            }
        }
    };
    this.getPlayerMaxPunts = function () {
        var max = new Jugador();
        for (var key in this.jugadors) {
            if (this.jugadors[key].punts > max.punts) {
                max = this.jugadors[key];




            }
        }
        return max;
    };


}
//var equipo = new Equipo("equipoPrueba",10,8,"prueba");
//var jugadorPrueba = new Jugador("jugador","jugadorNick","pivot",100);
//var jugadorPrueba2= new Jugador("jugador2","jugadorNick2","pivot",100);
//var jugadorPrueba3 = new Jugador("jugador3","jugadorNick3","pivot",100);
//
//equipo.addPlayer(jugadorPrueba);
//equipo.addPlayer(jugadorPrueba2);
//equipo.addPlayer(jugadorPrueba3);
//document.write("Nickname"+ jugadorPrueba.nickname);
//jugadorPrueba.nickname = "petu";
//jugadorPrueba.nom = "pedro";
//jugadorPrueba.posicio = "alero";
//jugadorPrueba.punts = 12;
//
//var jugadorPrueba2 = new Jugador;
//
//jugadorPrueba2.nickname = "petu2";
//jugadorPrueba2.nom = "pedro2";
//jugadorPrueba2.posicio = "alero2";
//jugadorPrueba2.punts = 5;
//
//
//
//
//var equipoPrueba = new Equipo;
//
//
//equipoPrueba.nom = "CEEUROPA";
//equipoPrueba.victories = 12;
//equipoPrueba.derrotes = 9;
//equipoPrueba.tipusJoc = "futbol";
//
//equipoPrueba.addPlayer(jugadorPrueba);
//equipoPrueba.addPlayer(jugadorPrueba2);
//
//
//
//
//document.write('<br />Nompre Equipo: ');
//document.write(equipoPrueba.nom);
//document.write('<br />Equipo Victories: ');
//document.write(equipoPrueba.victories);
//document.write('<br />Equipo Derrotes: ');
//document.write(equipoPrueba.derrotes);
//document.write('<br />Equipo TipusJoc: ');
//document.write(equipoPrueba.tipusJoc);
//document.write('<br />Jugador: ');
////document.write(equipoPrueba.getPlayer("petu").nom);
//document.write(equipoPrueba.getPlayer("petu").nom);
//document.write('<br />Jugador con más puntos: ');
//document.write(equipoPrueba.getPlayerMaxPunts().punts);
//
//jugadorPrueba2.updateJugador({"punts": 30});
//
//document.write('<br />Jugador con más puntos UPDATE:');
//document.write(equipoPrueba.getPlayerMaxPunts().punts);


app.service('datos', function () {

    this.equipos = [];
    this.equipos.push(Equipo);

    this.createEquipo = function (nom, victories, derrotes, tipusJoc) {

        var t = new Equipo(nom, victories, derrotes, tipusJoc);
        this.equipos.push(t);
        console.log(this.equipos);
    };
    this.createJugador = function (nickname, nom, posicio, punts, equipo) {

        var p = new Jugador(nickname, nom, posicio, punts);
        console.log(p);
        if (equipo === null) {
            console.log("sin equipo");
        } else {
            var esta = false;
            for (key in this.equipos[equipo].jugadors) {
                if(this.equipos[equipo].jugadors[key].nickname === nickname){
                    p.updateJugador(nom,posicio,punts);
                    this.equipos[equipo].jugadors[key] = p;
                    esta = true;
                     console.log(this.equipos);
                }
            }
            if(esta === false){
                this.equipos[equipo].addPlayer(p);
                console.log("jugador añadido");
                console.log(this.equipos);
            }else{}
        }
    };
    this.delPlayer =  function (nickname,equipo) {
        this.equipos[equipo].delPlayer(nickname);
    };

});