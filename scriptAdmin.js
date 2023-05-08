
const codigoJuegoInput = document.getElementById("codigoJuego");
const nombreJuegoInput=document.getElementById("nombreJuego");
const descripcionJuegoInput=document.getElementById("descripcionJuego");
const buttonAgregarJuego = document.getElementById("buttonAceptarAdmin")
const contenedor = document.getElementById("crudBox");

const URLimagen = document.getElementById("URLimagen");

const buttonActualizar = document.getElementById("buttonActualizar")

const columnaCodigo = document.getElementById("columnaCodigo")
const columnaNombre = document.getElementById("columnaNombre")
const columnaDescrip = document.getElementById("columnaDescripcion")
const columnaDisp = document.getElementById("columnaPublicado")
const columnaAcciones = document.getElementById("columnaAcciones")



const juegos = [];

const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))

const mostrarJuegosEnCRUD = () => {
    
    const parrafoCodigoJuego = document.createElement("p")
    const parrafoNombreJuego = document.createElement("p")
    const parrafoDescripcionJuego = document.createElement("p")
    const parrafoCheckBox = document.createElement("p")
    const parrafoAcciones=document.createElement("p")

    const botonBorrar = document.createElement("button")
    botonBorrar.classList.add("fa-solid", "bg-none" , "fa-trash");
    const botonEditar = document.createElement("button")
    botonEditar.classList.add("fa-solid","fa-pen-to-square");
    const botonCheckBox = document.createElement("INPUT");
    botonCheckBox.type="checkbox";
    
    
    gamesJsonParseados.forEach(juego => {
        
        parrafoCodigoJuego.textContent= `${juego.codigo}`;
        parrafoNombreJuego.textContent =  `${juego.nombre}`
        parrafoDescripcionJuego.textContent = `${juego.descripcion}`
        
        parrafoCodigoJuego.dataset.id = codigoJuegoInput.value;
        parrafoNombreJuego.dataset.id = codigoJuegoInput.value;
        parrafoDescripcionJuego.dataset.id = codigoJuegoInput.value;
        parrafoCheckBox.dataset.id=codigoJuegoInput.value;
        parrafoAcciones.dataset.id = codigoJuegoInput.value;


        parrafoCheckBox.append(botonCheckBox);
        parrafoAcciones.append(botonBorrar);
        parrafoAcciones.append(botonEditar);
        
        columnaCodigo.appendChild(parrafoCodigoJuego);
        columnaDisp.appendChild(parrafoCheckBox)
        columnaNombre.appendChild(parrafoNombreJuego);
        columnaDescrip.appendChild(parrafoDescripcionJuego);
        columnaAcciones.appendChild(parrafoAcciones);
       botonBorrar.addEventListener("click",(e) =>{
        borrar();
       }) 
    });


}



const anadirJuegos = () =>{

    juegos.push({
        nombre : nombreJuegoInput.value,
        codigo: codigoJuegoInput.value,
        descripcion: descripcionJuegoInput.value,
        imagen: URLimagen.value,
    })
    
    localStorage.setItem("ListaJuegos",JSON.stringify(juegos));

    
}

const borrar = () =>{
    const idBuscar = prompt("Ingrese ID a eliminar")
    gamesJsonParseados = gamesJsonParseados.filter(juegos => juegos.codigo !== idBuscar);
    
}


buttonAgregarJuego.addEventListener("click",(e) => {
    anadirJuegos();
    alert("Juego agregado, actualice la lista!")
})

buttonActualizar.addEventListener("click",(e) => {
    mostrarJuegosEnCRUD();
})
 

