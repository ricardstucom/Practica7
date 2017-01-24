var fitxes_inici = {
        fitxa1: "img1"
    , fitxa2: "img3"
    , fitxa3: "img4"
    , fitxa4: "img7"
    , fitxa5: "img6"
    , fitxa6: "img2"
    , fitxa7: "img4"
    , fitxa8: "img9"
    , fitxa9: "img8"
};

var fitxes_final = {
        fitxa1: "img1"
    , fitxa2: "img2"
    , fitxa3: "img3"
    , fitxa4: "img4"
    , fitxa5: "img5"
    , fitxa6: "img6"
    , fitxa7: "img7"
    , fitxa8: "img8"
    , fitxa9: "img9"
};
$(document).ready(iniciar);
function iniciar(){
    $("#fitxes>img").click(seleccionar);
    $('#seleccionada').click(tornar);
    $("#board>div").click(poner);
    
}
function tornar(){
  //  $('#seleccionada>img').appendTo('#fitxes');
  $(this).children("img").appendTo("#fitxes");
    }
//function seleccionar(){
    
  //  $(this).appendTo('#seleccionada');
//}
//$(document).ready(iniciar);
//function iniciar(){
//    $("div>img").click(seleccionar);
//  $("#board>div").click(cambiar);
//  
//  //$("#board>img").click(change);
//}
function seleccionar(){
   if($("#fitxes").children().length>0){
      $("#seleccionada>img").appendTo("#fitxes");
   }
  $(this).appendTo('#seleccionada'); 

  
 

}
function poner(){
     if($(this).children().length === 0){
       
     $("#seleccionada>img").appendTo(this); 
  }
  else{
     // var guardada= $(this).children("img");
      $(this).children("img").appendTo("#seleccionada"); 
     $("#seleccionada>img").appendTo(this); 
  }
//  if($(this).length === 0){
//      // alert('MADAFAKA');
//       $("#seleccionada>img").appendTo(this); 
//  }

}
