/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    $("#fitxes>img").click(selecciona_fitxa);
    $("#selec").click(retorna_fitxa);
    $(".carta").click(fitxa);
    $("#validar").click(check);
   
}
function selecciona_fitxa(){
    if($("#selec").children().length){
        $("#selec>img").appendTo("#fitxes");
        $("#selec").html("");  
    }
    $("#selec").html("");
    $(this).appendTo("#selec");
    
}

function retorna_fitxa(){
    $(this).children("img").appendTo("#fitxes");
    $("#selec").html("fitxa seleccionada");
}

function fitxa(){
    
    if($(this).children().length){
        if($("#selec").children().length){
            
            $("#selec>img").appendTo("#fitxes");
            
        }
          //  $("#selec").html("");  
          //- $(this).children("img").click(selecciona_fitxa);  //TOUNDER
            $(this).children("img").appendTo("#selec");
            
    }else{
        if($("#selec").children().length){
            $("#selec>img").off();
            $("#selec>img").appendTo($(this));
            $("#selec").html("fitxa seleccionada");
        }
    }
}
function check(){
    var fitxes = $(".carta");
    var cont=0;
    fitxes.each(function(i){
        var imatge= $(this).children().attr("src");
        var ruta = fitxes_final["fitxa"+(i+1)];
        ruta="Imagenes/"+ruta+".jpg";
        if(imatge===ruta){
            cont++;
            $(this).css({"border":"2px solid green"});
        }else{
             $(this).css({"border":"2px solid red"});
        }
    });
    if(cont===9){
        alert("WELL DONE");
    }else{
        alert("PRINGAO");
    }
}
