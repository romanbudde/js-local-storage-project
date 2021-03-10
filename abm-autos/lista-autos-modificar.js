window.onload = function(){
    // obtener la lista de usuarios
    // let listaUsuarios = getListaUsuarios();
    // obtener la table del html
    // let tabla = document.getElementById("tabla");

    let tablaABM = document.getElementById('tablaABM');
    let titulo = "Lista de Autos";
    let lista = getLista("listaAutos");
    if (lista.length === 0){
        lista = [
            {
                "Modelo": "Gol",
                "Marca": "Volkswagen",
                "Precio": 1000000,
                "Segmento": "B",
                "Color": "Negro",
                "HP": 96
            },
            {
                "Modelo": "Golf",
                "Marca": "Volkswagen",
                "Precio": 2000000,
                "Segmento": "C",
                "Color": "Azul Oscuro",
                "HP": 150
            },
            {
                "Modelo": "Tiguan",
                "Marca": "Volkswagen",
                "Precio": 3000000,
                "Segmento": "C",
                "Color": "Blanco",
                "HP": 160
            },
            {
                "Modelo": "Vento",
                "Marca": "Volkswagen",
                "Precio": 2000000,
                "Segmento": "C",
                "Color": "Gris Oscuro",
                "HP": 160
            }
        ];
        guardarEnLS("listaAutos", lista);
    }
    let titulos = ["#", "Modelo", "Marca", "Precio", "Segmento", "Color", "HP"];

    const funcionEspecifica = () => {
        // console.log('llamada');
        alert("autos a modificar");
    }

    renderizarHTML(tablaABM, titulo, lista, titulos, funcionEspecifica);
    agregarEventListenerABotones(lista, "autoAModificar", "listaAutos", 
                                "Modelo", "./modificar-auto.html");
}