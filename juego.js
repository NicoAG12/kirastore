

const titulo = document.getElementById("tituloJuego");
const descripcion = document.getElementById("descripcionJuego");
const imagenJuego = document.getElementById("imagenJuego");
const subtitulo = document.getElementById("subtitulo");
const video = document.getElementById("frameVideo");

const mostrarJuego = () =>{
    const datosJuegos = JSON.parse(localStorage.getItem("ListaJuegos"));

    datosJuegos.map(juego =>{
        titulo.textContent = `${juego.nombre}`;
        imagenJuego.src = `${juego.imagen}`;
        subtitulo.textContent = `${juego.subtitulo}`;
        descripcion.textContent = `${juego.descripcion}`;
        video.src = `${juego.video}`
    })

}

mostrarJuego();