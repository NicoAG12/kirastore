
const formulario = document.getElementById("formAñadirJuego");

const contenedor = document.getElementById("contenedorJuegos");

const alertJuego = document.getElementsByClassName("alert")



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
            indexJuego = index;
        }
    })

    listaJuegos.splice(indexJuego,1);
    guardarDatos();
}

const destacarJuego = (codigo) => {
   let indexJuego;
   listaJuegos.forEach((juego,index) => {
    if(juego.codigo == codigo){
        indexJuego = index;
    }
   })

   let juegoDestacado ={
    nombre : listaJuegos[indexJuego].nombre,
    codigo : listaJuegos[indexJuego].codigo,
    descripcion: listaJuegos[indexJuego].descripcion ,
    subtitulo : listaJuegos[indexJuego].subtitulo,
    video : listaJuegos[indexJuego].video,
    imagen: listaJuegos[indexJuego].imagen,
   }

   localStorage.setItem("juegoDestacado", JSON.stringify(juegoDestacado));

}


const editarJuego = (codigo) =>{
    let indexJuego;
    listaJuegos.forEach((juego,index) => {
        if(juego.codigo == codigo){
            indexJuego = index;
        }
    })
    const opc = parseInt(prompt("Ingrese opcion a propiedad: 1-nombre 2-descripcion  3-subtitulo  4-video 5-imagen"));
    switch (opc){
        case 1:
            listaJuegos[indexJuego].nombre = prompt("Ingrese nuevo nombre");
        break
        case 2:
            listaJuegos[indexJuego].descripcion = prompt("Ingrese nueva descripcion"); 

        break

        case 3:
            listaJuegos[indexJuego].subtitulo = prompt("Ingrese nuevo subtitulo");

        break

        case 4:
            listaJuegos[indexJuego].video = prompt("Ingrese nueva direccion de video");
        break

        case 5:
            listaJuegos[indexJuego].imagen = prompt("Ingrese nueva imagen");
        break
    }


    guardarDatos();
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
    let subtituloInput = document.getElementById("subtituloJuego".value);
    let videoJuegoInput = document.getElementById("videoJuego").value;

    añadirJuego(codigoJuegoInput,nombreJuegoInput,descripcionJuegoInput,subtituloInput,videoJuegoInput,URLimagenInput)
    guardarDatos();
    formulario.reset();
})

document.addEventListener("DOMContentLoaded", mostrarDatos());


contenedor.addEventListener("click",(e)=>{
   e.preventDefault()


    if(e.target.innerHTML == "edit" || e.target.innerHTML == "delete" || e.target.innerHTML == "star"){
        
       if (e.target.innerHTML == "edit"){
        const codigo = prompt("Ingrese el codigo del juego a editar")
        if(codigo == "" ){
            alert("Por favor ingrese un codigo valido");
            return
        } else{

            editarJuego(codigo);
        }
       } 

       if (e.target.innerHTML == "delete"){
        const codigo = prompt("Ingrese el codigo del juego a eliminar");
        if(codigo == "" ){
            alert("Por favor ingrese un codigo valido");
            return
        }
        else{

            eliminarJuego(codigo);
        }
       }

       if (e.target.innerHTML == "star"){
        const codigo = prompt("Ingrese el codigo del juego a destacar")
        if (codigo == ""){
            alert ("Por favor ingrese un codigo valido")
        }else{
            destacarJuego(codigo);
        }
       }
          

    }

})

