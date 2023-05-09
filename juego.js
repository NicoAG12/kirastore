

const titulo = document.getElementById("tituloJuego");
const descripcion = document.getElementById("descripcionJuego");
const imagenJuego = document.getElementById("imagenJuego");
const subtitulo = document.getElementById("subtitulo");
const video = document.getElementById("videoJuego");


const juegoDestacado = JSON.parse(localStorage.getItem("juegoDestacado"))

const paginaJuego = () =>{
    titulo.textContent = `${juegoDestacado.nombre}`;
    descripcion.textContent = `${juegoDestacado.descripcion}`;
    imagenJuego.src = `${juegoDestacado.imagen}`;
    subtitulo.textContent = `${juegoDestacado.subtitulo}`;
    video.src = `${juegoDestacado.video}`;

}

document.addEventListener("DOMContentLoaded",paginaJuego());


