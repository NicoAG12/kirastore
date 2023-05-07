
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


const mostrarJuegosEnCRUD = () => {

const parrafoCodigoJuego = document.createElement("p")
const parrafoNombreJuego = document.createElement("p")
const parrafoDescripcionJuego = document.createElement("p")
const parrafoCheckBox = document.createElement("p")
const parrafoAcciones=document.createElement("p")


const botonDestacado = document.createElement("button")
botonDestacado.classList.add("fa-solid","fa-star");
const botonBorrar = document.createElement("button")
botonBorrar.classList.add("fa-solid", "bg-none" , "fa-trash");
const botonEditar = document.createElement("button")
botonEditar.classList.add("fa-solid","fa-pen-to-square");
const botonCheckBox = document.createElement("INPUT");
botonCheckBox.type="checkbox";

const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))

gamesJsonParseados.forEach(juego => {

    parrafoCodigoJuego.textContent= `${juego.codigo}`;
    parrafoNombreJuego.textContent =  `${juego.nombre}`
            parrafoDescripcionJuego.textContent = `${juego.descripcion}`

      
    parrafoCheckBox.append(botonCheckBox);
    parrafoAcciones.append(botonDestacado);
    parrafoAcciones.append(botonBorrar);
    parrafoAcciones.append(botonEditar);

    columnaCodigo.appendChild(parrafoCodigoJuego);
     columnaDisp.appendChild(parrafoCheckBox)
     columnaNombre.appendChild(parrafoNombreJuego);
     columnaDescrip.appendChild(parrafoDescripcionJuego);
     columnaAcciones.appendChild(parrafoAcciones);
    
});


    if (gamesJsonParseados == null){
        console.log("No hay juegos en la")
    }

    /*
        gamesJsonParseados.map((juego) => {
       parrafoCodigoJuego.textContent= `${juego.codigo}`;
    parrafoNombreJuego.textContent =  `${juego.nombre}`
            parrafoDescripcionJuego.textContent = `${juego.descripcion}`

      
    parrafoCheckBox.append(botonCheckBox);
    parrafoAcciones.append(botonDestacado);
    parrafoAcciones.append(botonBorrar);
    parrafoAcciones.append(botonEditar);

    columnaCodigo.appendChild(parrafoCodigoJuego);
     columnaDisp.appendChild(parrafoCheckBox)
     columnaNombre.appendChild(parrafoNombreJuego);
     columnaDescrip.appendChild(parrafoDescripcionJuego);
     columnaAcciones.appendChild(parrafoAcciones);
    })
    */
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


buttonAgregarJuego.addEventListener("click",(e) => {
    anadirJuegos();
})

buttonActualizar.addEventListener("click",(e) => {
    mostrarJuegosEnCRUD();
})
 

