


/*
const contenedor = document.getElementById("crudBox");
const subtituloJuego=document.getElementById("subtituloJuego");
const buttonActualizar = document.getElementById("buttonActualizar")

const columnaCodigo = document.getElementById("columnaCodigo")
const columnaNombre = document.getElementById("columnaNombre")
const columnaDescrip = document.getElementById("columnaDescripcion")
const columnaDisp = document.getElementById("columnaPublicado")
const columnaAcciones = document.getElementById("columnaAcciones")



const juegos = [];


const mostrarJuegosEnCRUD = () => {
    
    const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))
    
    gamesJsonParseados.map((juego) => {
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
    }
    
    ) 
};



const anadirJuegos = () =>{
    
    const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))
    
    
    gamesJsonParseados.map(juego => {
        if (codigoJuegoInput == juego.codigo){
            alert("EL JUEGO YA SE ENCUENTRA AGREGADO"); 
        }
        else{
            juegos.push({
                nombre : nombreJuegoInput.value,
                codigo: codigoJuegoInput.value,
                descripcion: descripcionJuegoInput.value,
                subtitulo : subtituloJuego.value,
                video : videoJuego.value,
                imagen: URLimagen.value,
            })
            
            localStorage.setItem("ListaJuegos",JSON.stringify(juegos));  
            alert("JUEGO AGREGADO!. ACTUALICE LA LISTA")    
        }
    })
    
    
    
    
    
    
}


editarJuego = () =>{
    const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))
    const idBuscar = prompt("Ingrese el ID del juego a reemplazar");
    juegoSeleccionado = gamesJsonParseados.filter(juego => idBuscar == juego.codigo);
    
}


botonEditar.addEventListener("click",(e)=>{
    editarJuego();
})

buttonAgregarJuego.addEventListener("click",(e) => {
    anadirJuegos();
    
})


buttonActualizar.addEventListener("click",(e) => {
    
    mostrarJuegosEnCRUD();
})
*/
const formulario = document.getElementById("formAñadirJuego");

const contenedor = document.getElementById("contenedorJuegos");

let listaJuegos = [];


const añadirJuego = (nombre,codigo,descripcion,subtitulo,video,imagen) =>{
    
    let juego = {
        nombre : nombre,
        codigo: codigo,
        descripcion: descripcion ,
        subtitulo : subtitulo,
        video : video,
        imagen: imagen,
    }
    listaJuegos.push(juego);

    return juego;
}


const guardarDatos = () =>{
    localStorage.setItem("juegos",JSON.stringify(listaJuegos))
    mostrarDatos();
}


const mostrarDatos = () =>{
    contenedor.innerHTML = "";
    
    listaJuegos =JSON.parse(localStorage.getItem("juegos"));
    if (listaJuegos == null){
        listaJuegos = [];
    } else{
        listaJuegos.forEach(juego => {
            contenedor.innerHTML += `<div class="alert alert-secondary " role="alert"><i class="material-icons">gamepad</i> <b>Codigo: ${juego.codigo}</b><p>Nombre juego: ${juego.nombre} </p><p>Descripcion: ${juego.descripcion} </p><p>Disponibilidad:  </p><i class="material-icons">edit</i><i class="material-icons">star</i><i class="material-icons">delete</i>`
        })
    }
}




formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    let codigoJuegoInput = document.getElementById("codigoJuego").value;
    let nombreJuegoInput=document.getElementById("nombreJuego").value;
    let descripcionJuegoInput=document.getElementById("descripcionJuego").value;
    let URLimagenInput = document.getElementById("URLimagen").value;
    let videoJuegoInput = document.getElementById("videoJuego").value;

    añadirJuego(codigoJuegoInput,nombreJuegoInput,descripcionJuegoInput,URLimagenInput,videoJuegoInput)
    guardarDatos();
    formulario.reset();
})

document.addEventListener("DOMContentLoaded", mostrarDatos());

contenedor.addEventListener("click",(e)=>{
   e.preventDefault()
   console.log(e);
})

