
//
//
//
////
//function Coche(nombre, precio, extras) {
//    this.nombre = nombre || "nombre defecto";
//    this.precio = precio || "20293";
//    this.extras = extras;
//}
//
//function Concesionario() {
//    this.nombre;
//    this.direccion;
//    this.comanda = new Array();
//
//    this.addComanda = function (coche) {
//        var idComanda = this.comanda.push(coche);
//        return idComanda;
//    };
//}





function Jugador(nickname, nom, posicio,punts ){
    
    this.nickname = nickname;
    this.nom = nom;
    this.posicio = posicio;
    this.punts = punts;
}
function Equipo(){
    this.nom;
    this.victories;
    this.derrotes;
    this.tipusJoc;
    this.jugadors=[];
    
    
    this.addPlayer = function(jugador){
//         this.jugadors[jugador.nom] = jugador;
         this.jugadors.push(jugador);
    };
     this.getPlayer = function(nickname){
     for(var key in this.jugadors){
         if((this.jugadors[key].nickname)===(nickname)){
               return this.jugadors[key];
         }
     }
               
            
           
       
              
        
    };
     this.delPlayer = function(nickname){
         for(var i=0;jugadors.length();i++){
            if(jugadors[i].getNickname().equals(nickname)){
                
                
                jugadors.splice(i, 1);
              
            }
        }
    };
     this.getPlayerMaxPunts = function(){
        var max= new Jugador("","","",0);
        for(var key in this.jugadors){
            if(this.jugadors[key].punts>max.punts){
                max = this.jugadors[key];
                
                
                
              
            }
        }
        return max;
    };
}

var jugadorPrueba = new Jugador;

jugadorPrueba.nickname = "petu";
jugadorPrueba.nom="pedro";
jugadorPrueba.posicio="alero";
jugadorPrueba.punts=12;



var equipoPrueba = new Equipo;


equipoPrueba.nom="CEEUROPA";
equipoPrueba.victories=12;
equipoPrueba.derrotes=9;
equipoPrueba.tipusJoc="futbol";

equipoPrueba.addPlayer(jugadorPrueba);





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
console.log(equipoPrueba.getPlayer("petu"));
console.log(equipoPrueba.getPlayerMaxPunts());
//console.log(jugadorPrueba);

//
//app.service("serv", function () {
//  
//    
//
//    this.crearEquipo = function(nom, victories, derrotes, tipusJoc){
//        var e = new Equipo();
//        e.nom=nom;
//        e.victories=victories;
//        e.derrotes=derrotes;
//        e.tipusJoc=tipusJoc;
//        this.equipo.push(e);
//    };
//    
//    /*	Una función que añada un coche a un concesionario.   */
//    this.addJugadorEquipo= function(num_equipo,nickname,nom,posicio, punts){
//        var j= new Jugador(nickname, nom, posicio, punts);                
//        var equip =this.equipos[num_conces];
//        conces.addComanda(c); //add el coche utilizando la funcion de concesiono addComanda
//    };
//
//});