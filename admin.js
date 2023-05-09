
const formulario = document.getElementById("formAñadirJuego");

const contenedor = document.getElementById("contenedorJuegos");

let listaJuegos = [];


const añadirJuego = (codigo,nombre,descripcion,subtitulo,video,imagen) =>{
    
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


const eliminarJuego = (codigo) => {
    let indexJuego;
    listaJuegos.forEach((juego,index) => {
        if(juego.codigo == codigo){
            indexJuego == index;
        }
    })

    listaJuegos.splice(indexJuego,1);
    guardarDatos();
}

const editarJuego = (codigo) =>{
    listaJuegos.forEach((juego,index) => {
        if(juego.codigo == codigo){
            indexJuego == index;
          
        }
    })
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
    console.log(e.target);
    if(e.target.innerHTML == "edit" || e.target.innerHTML == "delete"){
     let codigo =  contenedor.childNodes[0].childNodes[2].innerHTML
        if (e.target.innerHTML == "edit"){
            editarJuego(codigo);
        }

        if (e.target.innerHTML == "delete"){
            eliminarJuego(codigo);
        }
    }

})

