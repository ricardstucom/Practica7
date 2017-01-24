$(document).ready(iniciar);
function iniciar(){
    $("#setClass").click(setClass);
    $("#setAttr").click(setAttr);
    $("#addElem").click(addElem);
}
function setClass(){
    var clas=$("input").val();
    $("#setClass").addClass(clas);
   
}
function setAttr(){
    var text=$("input").val();
    $(this).attr("myAttr",text);
}
function addElem(){
    var div = $("<div></div>");
    var txt = $("#setClass").attr("class");
     div.addClass(txt);  
     div.click(borrarMe);
     div.appendTo("#contenidorsDivs");
     div.html("AH");
}