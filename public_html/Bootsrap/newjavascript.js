


$(document).ready(iniciar);
function iniciar() {
    $("#button1").click(changeBlueColor);
    $("#button2").click(changeRedColor);
    $("#button3").click(setInvisible);
    $("#button4").click(setVisible);
    $("#button5").click(toggleVisible);
    $("#initMove").click(initMove);
    $("#intermitente").fadeOut();
    $("#contenidorDivs>div").mouseenter(incSize);
    $("contenidorDivs>div").mouseout(decSize);
    $("#setBlueColor").click();
    $("#setRedColor").click(setRedColor);
    $("showPop").click(tooglePopUp);
    $("#popUp").click(ocultaPopUp);
    $("3intermitent").click(toogleColors);
}
function changeBlueColor() {
    $("#panel1").css({
        "background-color": "blue",
        "background-image": "none"
    });

}
function changeRedColor() {
    $("#panel1").css({
        "background-color": "red",
        "background-image": "none"
    });

}
function setInvisible() {
    $("#panel2").fadeOut(1000);
}
;
function setVisible() {
    $("#panel2").fadeIn(1000);
}
;
function toggleVisible() {
    $("#panel2").fadeToggle(1000);
}
var animado=false;

function initMove() {
    $("#divMobil").css({
         "background-color": "red",
        "background-image": "none"
    });
    if(!animado){
        animado=true;
        moveDreta();
    
        
    
    }else{
        animado=false;
        $("#divMobil").stop();
    }
}
function moveDreta(){
    $("#divMobil").animate(
            {left: "400px"},
            {complete: moveEsquerre,
            duration:1000
        }
    );
}
function moveEsquerre() {
    $("#divMobil").animate(
            {left: 0},
            {complete:moveDreta}
    );
}