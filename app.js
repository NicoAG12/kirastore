/** LOGIN */
const doc = document;
const userEmail = doc.getElementById("emailLog");
const userPassword=doc.getElementById("passwordLog");
const boton = document.getElementById("boton")
const admin=doc.getElementById("administrador")
const userModal = doc.getElementById("userModal")
const dropDown = doc.getElementById("dropdownUser")

const prueba = doc.getElementById("showUser")

const userList = JSON.parse(localStorage.getItem("userList"))

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
    dropDown.style.display=none;
}

else if(login){
    alert ("Inicio de sesion correcto")
    userModal.style.display = "none";
    dropDown.style.display = null;
    showUser.innerHTML = login.user_name;
}


/*

if (datos.email == "admin" && datos.password == "admin"){
   
a
}
*/
    /*


   else if(datos.email == userList.email && datos.password == "1234"){
      alert ("INICIO CORRECTO")
    }

    else{
        alert("Datos incorrectos")
    }

    */


})





