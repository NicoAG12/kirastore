
const formularioRegistro= document.getElementById("formularioRegistro")
const registerButton = document.getElementById("registerButton")


let arrayUsuarios = [];

registrarUsuario = (userName,userPassword,userEmail) => {
    let usuario = {
        nombre : userName,
        password : userPassword,
        email : userEmail,
    }

    arrayUsuarios.push(usuario);
    return usuario;
}

guardarDatosUser = () => {

    localStorage.setItem("userList",JSON.stringify(arrayUsuarios));

        obtenerDatosUser();

    
}

obtenerDatosUser = () => {
    arrayUsuarios = JSON.parse(localStorage.getItem("userList"));
}

formularioRegistro.addEventListener("submit", (e) =>{
    e.preventDefault();

        let user_name = document.getElementById("userName").value
        let user_password = document.getElementById("userPassword").value
        let user_email = document.getElementById("userMail").value

        registrarUsuario(user_name,user_password,user_email);
        guardarDatosUser();
        formularioRegistro.reset();
})

    
   document.addEventListener("DOMContentLoaded",(obtenerDatosUser()))


