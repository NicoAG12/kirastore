/** LOGIN */
const doc = document;
const userEmail = doc.getElementById("emailLog");
const userPassword=doc.getElementById("passwordLog");
const boton = document.getElementById("buttonAceptar")
const admin=doc.getElementById("administrador")
const userModal = doc.getElementById("userModal")
const dropDown = doc.getElementById("dropdownUser")
const prueba = doc.getElementById("showUser")
const divMain = doc.getElementById("contenedorCards");
const userList = JSON.parse(localStorage.getItem("userList"))
const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))

const botonprueba = document.getElementById("destacado");

const tituloDestacado = document.getElementById("tituloJuego")
const descripcionDestacado=document.getElementById("descripcionDestacado");
const imagenDestacado = document.getElementById("imagenDestacado");
const imagenDestacadoMobile = document.getElementById("imagenMobile");


boton.addEventListener("click", (e) => {
    e.preventDefault();

    const datos = {
        email : userEmail.value,
        password: userPassword.value,
    }

const login = userList.find(usuario=>usuario.user_email == datos.email && usuario.user_password == datos.password)

if (!login){
    alert("No se ha encontrado el usuario");
    return;
}

if (login.user_email == "admin" && login.user_password == "admin"){
    admin.style.display = null;
    admin.classList.add("animate__animated");
    admin.classList.add("animate__fadeIn");
    userModal.style.display = "none";
    dropDown.style.display="none";
}

else if(login){
    alert ("Inicio de sesion correcto")
    userModal.style.display = "none";
    dropDown.style.display = null;
    prueba.innerHTML = login.user_name;
}
})


const crearCard = () => {

    const newCard = gamesJsonParseados.map((juego)=>{
        return `  <div class="card cardStyle" style="width: 18rem;">
        <img src="${juego.imagen}" class="card-img-top p-2" alt="${juego.nombre}">
        <div class="card-body">
          <h5 class="card-title">${juego.nombre}</h5>
          <hr style="color:white">
          <p class="card-text">${juego.descripcion}</p>
          <hr style="color:white">
          <a href="./juego.html" class="btn buttonStyle">Ir a la pagina del juego</a>
        </div>
      </div> }`; 
       
    })  

    divMain.insertAdjacentHTML(`beforeend`,newCard);    
}



const cambiarDestacado = () =>{
    const idDestacado = prompt("Ingrese ID del juego a destacar");

    gamesJsonParseados.map((juego) => {
        if (juego.codigo == idDestacado){
            tituloDestacado.textContent = `${juego.nombre}`;
            descripcionDestacado.textContent = `${juego.descripcion}`;
            imagenDestacado.src = `${juego.imagen}`
            imagenDestacadoMobile.src = `${juego.imagen}`
            return
        }
    })
}

botonprueba.addEventListener("click",(e)=>{
    cambiarDestacado();
})

crearCard();

