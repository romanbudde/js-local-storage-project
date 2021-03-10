window.onload = function(){
    autoAModificar = getItem("autoAModificar");
    let atributos = ["Modelo", "Marca", "Precio", "Segmento", "Color", "HP"];
    let atributosType = ["text", "text", "number", "text", "color", "number"]
    let container = document.getElementById("content-container");
    let listaAutos = getLista("listaAutos");
    redirect = "lista-autos-a-modificar.html";
    renderizarHTML(container, listaAutos, atributos, atributosType, autoAModificar, redirect);
    agregarEventListenerABotones(listaAutos, autoAModificar, "listaAutos", "Modelo", 
                                "./lista-autos-a-modificar.html");
}