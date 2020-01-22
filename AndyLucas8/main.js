let contenedorBombero = document.getElementById("callBombero");

let contenedorMoto = document.getElementById("callMotobomba");

let listarBom = [];

let listaMoto = [];

//bomberos
function agregarBombero() {
    
    //bomberos datos

    let nombre = document.getElementById("nombre").value;
    let fechNaci = document.getElementById("nacimiento").value;
    let nuevoBombero = new Bombero(nombre, fechNaci);
    listarBom.push(nuevoBombero);
    //lista de bomberos

    for (let j = 0; j < listarBom.length; j++) {
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.setAttribute("value", j);
        casillero.id = j;
        console.log("numero de casillero bombero " + casillero.id);
        casillero.appendChild(document.createTextNode(listarBom[j].nombre));

        document.getElementById("nombre").value = " ";
        document.getElementById("nacimiento").value = " ";
    }
    contenedorBombero.appendChild(casillero);
}
console.log("mirar toda la lista en listaBomberos");

// motobombas
function agregarMotobomba() {
    //obtener datos motobomba
    let codigo = document.getElementById("nameMoto").value;
    let nuevaMoto = new Motobomba(codigo);
    listaMoto.push(nuevaMoto);
    //lista motobomba
    for (let i = 0; i < listaMoto.length; i++) {
        var casillero = document.createElement('div');
        casillero.className = 'celdas';
        casillero.id = i;
        console.log("numero de cajon bombero " + casillero.id);
        casillero.setAttribute("value", i);
        casillero.appendChild(document.createTextNode(listaMoto[i].codigo));
        document.getElementById("nameMoto").value = " ";
    }
    contenedorMoto.appendChild(casillero);
}
console.log("observa la lista en motobombas");

let seleccionados=[];
//asociar
function asociar() {


    var serie = generarNumero(0, 90);//listaMo listaBom
    if ((seleccionados.includes(serie) || seleccionados === [])) {
        console.log("numero existente : " + serie);
        asociar();
    } else if (numUsados.length <91) {//91 listas.length
        vernumber=serie;
        numUsados.push(serie);
        //numeros que se van a guardar
        console.log("numero guardado",numUsados[numUsados.length - 1]);
    } else {
        var marco=document.getElementById("mostrar");
        marco.style.backgroundColor = "pink";
        alert("los numeros han sido guardados");
    }
    document.getElementById("verNumero").innerHTML=vernumber;

}