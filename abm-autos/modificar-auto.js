var redirect = "lista-autos-a-modificar.html";
var autoAModificar = getItem("autoAModificar");
var atributos = ["Modelo", "Marca", "Precio", "Segmento", "Color", "HP"];
var atributosType = ["text", "text", "number", "text", "color", "number"]
var container = document.getElementById("content-container");
var listaAutos = getLista("listaAutos");


//Desde este lugar generico tenemos la logica a ejecutarse cuando se llame del componente
function  guardarCambiosAuto(itemModificado){

    debugger;
    console.log(itemModificado)
    
    // // crear un nuevo item con los datos de los inputs
    // debugger;
    // for (i = 0; i < arrayAtributos.length; i++){
    //     console.log("a");
    //     itemAModificar[arrayAtributos[i]] = document.getElementById(arrayAtributos[i].value);
    // }
    // lista[itemAModificar[indice]] = itemAModificar;
    // guardarEnLS("listaAutos", lista);
    // console.log(itemAModificar);
    // e.preventDefault();
   
}

window.onload = function(){
    renderizarHTML(container, listaAutos, atributos, atributosType, autoAModificar, redirect,guardarCambiosAuto);
    // agregarEventListenerABotones(listaAutos, autoAModificar, "listaAutos", "Modelo","./lista-autos-a-modificar.html");
}