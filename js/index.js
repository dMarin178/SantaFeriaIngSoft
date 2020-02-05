document.getElementById('btn-agregar').onclick = () => { agregarProducto() }

function agregarProducto() {
    let nombre = document.getElementById('inputNombre').value;

    alert( nombre )
}

function mostrarNoComestible(){
    document.getElementById('NoComestible').style.display(block);
}

function mostrarComestible(){
    document.getElementById('Comestible').style.display(block);
}

function ocultarComestible(){
    document.getElementById('Comestible').style.display(none);
}

function ocultarNoComestible(){
    document.getElementById('NoComestible').style.display(none);
}


