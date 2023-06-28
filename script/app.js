/** LOGIN */
const doc = document;
const userEmail = doc.getElementById("emailLog");
const userPassword = doc.getElementById("passwordLog");
const boton = document.getElementById("buttonAceptar")
const admin = doc.getElementById("administrador")
const userModal = doc.getElementById("userModal")
const dropDown = doc.getElementById("dropdownUser")
const userDropdown = doc.getElementById("showUser")
const divMain = doc.getElementById("contenedorCards");

const userList = JSON.parse(localStorage.getItem("userList"))

const juegos = JSON.parse(localStorage.getItem("juegos"))


const tituloDestacado = document.getElementById("tituloJuego");
const descripcionDestacado = document.getElementById("descripcionDestacado");
const imagenDestacado = document.getElementById("imagenDestacado");
const imagenDestacadoMobile = document.getElementById("imagenMobile");

const cardsJuegos = [];

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const datos = {
        email: userEmail.value,
        password: userPassword.value,
    }

    const login = userList.find(usuario => usuario.email == datos.email && usuario.password == datos.password)

    if (!login) {
        alert("No se ha encontrado el usuario");
        return;
    }



    if (login.email === "admin@hotmail.com" && login.password === "admin") {
        admin.style.display = null;
        admin.classList.add("animate__animated");
        admin.classList.add("animate__fadeIn");
        userModal.style.display = "none";
        dropDown.style.display = "none";
    }

    else if (login) {
        alert("Inicio de sesion correcto")
        userModal.style.display = "none";
        dropDown.style.display = null;
        userDropdown.innerHTML = login.nombre;
    }
})

const crearCard = () => {

    const newCard = juegos.map((juego) => {
        return `<div class="card cardStyle" style="width: 18rem;">
        <img src="${juego.imagen}" class="card-img-top p-2" alt="${juego.nombre}">
        <div class="card-body">
          <h5 class="card-title">${juego.nombre}</h5>
          <hr style="color:white">
          <p class="card-text">${juego.descripcion}</p>
          <hr style="color:white">
          <a href="./juego.html" class="btn buttonStyle">Ir a la pagina del juego</a>
        </div>
      </div>`
    })

    divMain.insertAdjacentHTML(`beforeend`, newCard);

}



const destacado = JSON.parse(localStorage.getItem("juegoDestacado"));

const cambiarDestacado = () => {

    tituloDestacado.textContent = `${destacado.nombre}`;
    descripcionDestacado.textContent = `${destacado.descripcion}`;
    imagenDestacado.src = `${destacado.imagen}`
    imagenDestacadoMobile.src = `${destacado.imagen}`

}



divMain.addEventListener("click", (e) => {
    console.log(e.target);
})

document.addEventListener("DOMContentLoaded", crearCard());
document.addEventListener("DOMContentLoaded", cambiarDestacado());

