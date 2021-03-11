window.onload = function() {
    inicioComponenteLista();
    inicioComponenteEdit();
}

function inicioComponenteEdit(){
    var redirect = "lista-autos-a-modificar.html";
    var autoAModificar = getItem("autoAModificar");
    var atributos = ["Modelo", "Marca", "Precio", "Segmento", "Color", "HP"];
    var atributosType = ["text", "text", "number", "text", "color", "number"]
    var container = document.getElementById("editaABM");
    var listaAutos = getLista("listaAutos");

    const guardarCambios = (itemModificado) => {

        debugger;
        console.log(itemModificado)
    }
    renderizarHTML_edit(container, listaAutos, atributos, atributosType, autoAModificar, redirect,guardarCambios);

}

function inicioComponenteLista(){
    let tablaABM = document.getElementById('tablaABM');
    let titulo = "Titulo2";
    let lista = [
        {
            "id": "0",
            "nombre": "juan"
        },
        {
            "id": "1",
            "nombre": "seba"
        },
        {
            "id": "2",
            "nombre": "gabi"
        },
        {
            "id": "3",
            "nombre": "roman"
        }
    ];
    let titulos = ["id", "nombre"];

    const funcionEspecifica = (parametroDesdeComponente) => {
        debugger;
        console.log(parametroDesdeComponente);
        alert('llamada generica');
    }

    const funcionEliminar = (item2Eliminar) => {
        debugger;
        console.log(item2Eliminar);
        alert('llamada funcionEliminar a ' + item2Eliminar.nombre);
        alert('TODO: 1-eliminar item del localstorage , 2-refrescar lista desde el localstorage');
    }

    const funcionModificar = (itemAmodificar) => {
        debugger;
        console.log(itemAmodificar);
        alert('llamada funcionModificar ' + itemAmodificar.nombre);
        alert('TODO: 1-modificar item del localstorage , 2-refrescar lista desde el localstorage');
        
    }

    renderizarHTML_Lista(tablaABM, titulo, lista, titulos, funcionEspecifica,funcionEliminar,funcionModificar);
}