
var extrasGeneral = new Array();

extrasGeneral[0] = "ABS";
extrasGeneral[1] = "cierres centralizados";
extrasGeneral[2] = "airbag";
extrasGeneral[3] = "rueda repuesto";
extrasGeneral[4] = "radio";





var coche = new Coche();
var coche1 = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
var coche4 = new Coche();

var concesionario = new Concesionario();
var concesionario2 = new Concesionario();



function Coche() {
    this.modelo;
    this.precio;
    this.extras = [];

    this.addExtra = function (extra) {

        this.extras.push(extra);



        var pos = this.extras.length;

        return pos;
    };

this.addExtraRandom = function (){
    var contador=0;
    while(contador<4){
      var random= Math.floor((Math.random()*5)+0);
      
      coche1.extras.push(extrasGeneral[random]);
      //coche1.extras.push(extrasGeneral[0]);
      //console.log(coche1.extras[0]);
      var random2= Math.floor((Math.random()*5)+0);
      coche2.extras.push(extrasGeneral[random2]);
     var random3= Math.floor((Math.random()*5)+0);
      coche3.extras.push(extrasGeneral[random3]);
      var random4= Math.floor((Math.random()*5)+0);
      coche4.extras.push(extrasGeneral[random4]);
      contador++;
      console.log(random);
  }
};
console.log(coche1);
//console.log(coche2);
//console.log(coche3);
//console.log(coche4);
    this.getExtra = function (pos) {

        return this.extras[pos];
    };






}

function Concesionario() {
    this.nombre;
    this.direccion;
    this.comanda = [];

    this.setDireccion = function (direccion2) {

        this.direccion = direccion2;
        

    };

 this.setNombre = function (nombre2) {

        this.nombre = nombre2;
       

    };

    this.addComanda = function (coche) {

        this.comanda.push(coche);
         concesionario2.comanda.push(coche1);
         concesionario2.comanda.push(coche2);
          concesionario2.comanda.push(coche3);
           concesionario2.comanda.push(coche4);
        var pos = this.comanda.length;
       
        return pos;
    };
}



/*Código de comprovación de Concesionario*/

concesionario.setNombre("Mario Kart");
concesionario.setDireccion("c/Mushroom Kingdom 1");

concesionario2.setNombre("Flipaooo");
concesionario2.setDireccion("c/Eixaple");


coche.nombre = "Fantastico!";
coche.precio = "70000€";

coche1.nombre = "Coche1!";
coche1.precio = "70000€";

coche2.nombre = "Coche2!";
coche2.precio = "70000€";

coche3.nombre = "Coche3!";
coche3.precio = "70000€";

coche4.nombre = "Coche4!";
coche4.precio = "70000€";


var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra - 1);
var posicionComanda = concesionario.addComanda(coche);

coche1.addExtraRandom();

document.write('<br />Nompre Coche: ');
document.write(coche.nombre);






document.write('<br />Precio: ');
document.write(coche.precio);
document.write('<br />Extra: ');
document.write(extra);




document.write('<br />Nompre Concesionario: ');
document.write(concesionario.nombre);

document.write('<br />Direccion: ');
document.write(concesionario.direccion);

document.write('<br /> Nombre coche: ');
document.write(concesionario.comanda[posicionComanda - 1].nombre);
document.write('<br /> Nombre extra: ');
document.write(concesionario.comanda[posicionComanda - 1].extras[numExtra - 1]);

document.write('<br />Nompre Concesionario2: ');
document.write(concesionario2.nombre);
document.write('<br />Direccion2: ');
document.write(concesionario2.direccion);
document.write('<br /> Nombre coche1: ');
document.write(concesionario2.comanda[0].nombre);
document.write('<br /> Extra coche1 (1): ');
document.write(concesionario2.comanda[0].extras[0]);

document.write('<br /> Extra coche1 (2): ');
document.write(concesionario2.comanda[0].extras[1]);

document.write('<br /> Extra coche1 (3): ');
document.write(concesionario2.comanda[0].extras[2]);

document.write('<br /> Extra coche1 (4): ');
document.write(concesionario2.comanda[0].extras[3]);
document.write('<br /> ');

document.write('<br /> Nombre coche2: ');
document.write(concesionario2.comanda[1].nombre);
document.write('<br /> Extra coche2 (1): ');
document.write(concesionario2.comanda[1].extras[0]);

document.write('<br /> Extra coche2 (2): ');
document.write(concesionario2.comanda[1].extras[1]);

document.write('<br /> Extra coche2 (3): ');
document.write(concesionario2.comanda[1].extras[2]);

document.write('<br /> Extra coche2 (4): ');
document.write(concesionario2.comanda[1].extras[3]);
document.write('<br /> ');




document.write('<br /> Nombre coche3: ');
document.write(concesionario2.comanda[2].nombre);
document.write('<br /> Extra coche3 (1): ');
document.write(concesionario2.comanda[2].extras[0]);

document.write('<br /> Extra coche3 (2): ');
document.write(concesionario2.comanda[2].extras[1]);

document.write('<br /> Extra coche3 (3): ');
document.write(concesionario2.comanda[2].extras[2]);

document.write('<br /> Extra coche3 (4): ');
document.write(concesionario2.comanda[2].extras[3]);
document.write('<br /> ');



document.write('<br /> Nombre coche4: ');
document.write(concesionario2.comanda[3].nombre);
document.write('<br /> Extra coche4 (1): ');
document.write(concesionario2.comanda[3].extras[0]);

document.write('<br /> Extra coche4 (2): ');
document.write(concesionario2.comanda[3].extras[1]);

document.write('<br /> Extra coche4 (3): ');
document.write(concesionario2.comanda[3].extras[2]);

document.write('<br /> Extra coche4 (4): ');
document.write(concesionario2.comanda[3].extras[3]);
document.write('<br /> ');

