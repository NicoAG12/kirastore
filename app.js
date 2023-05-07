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


boton.addEventListener("click", (e) => {
    e.preventDefault();

    const datos = {
        email : userEmail.value,
        password: userPassword.value,
    }

const login = userList.find(usuario=>usuario.user_email == datos.email && usuario.user_password == datos.password)

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
        return `  <div class="card" style="width: 18rem;">
        <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
        <div class="card-body">
          <h5 class="card-title">${juego.nombre}</h5>
          <p class="card-text">${juego.descripcion}</p>
          <a href="#" class="btn btn-primary">Ir a la pagina del juego</a>
        </div>
      </div> }`; 
       
    })  

    divMain.insertAdjacentHTML(`beforeend`,newCard);    
}

crearCard();