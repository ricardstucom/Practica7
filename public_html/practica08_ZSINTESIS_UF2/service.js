//
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
        var idComanda = this.jugadors.push(jugador);
        return idComanda;
    };
     this.getPlayer = function(nickname){
        for(var i=0;jugadors.size();i++){
            if(jugadors[i].getNom().equals(nickname)){
                return jugadors[i];
            }
        }
    };
     this.delPlayer = function(nickname){
         for(var i=0;jugadors.size();i++){
            if(jugadors[i].getNickname().equals(nickname)){
                
                
                jugadors.splice(i, 1);
              
            }
        }
    };
     this.getPlayerMaxPunts = function(){
        
    };
}
app.service("serv", function () {
    this.pepe2 = "Hola";
    this.concesionarios = [];
    
/**d.	Una función que cree un nuevo concesionario recibiendo como
 *  parámetro el nombre i la dirección y que lo añada al array de
 *   concesionarios..
 */
    this.crearConcesionario = function(nombre, direccion){
        var c = new Concesionario();
        c.nombre=nombre;
        c.direccion=direccion;
        this.concesionarios.push(c);
    };
    
    /*	Una función que añada un coche a un concesionario.   */
    this.addCocheConcesionario= function(num_conces,nombre, precio, extras){
        var c= new Coche(nombre,precio,extras);                
        var conces =this.concesionarios[num_conces];
        conces.addComanda(c); //add el coche utilizando la funcion de concesiono addComanda
    };

});