
const formularioRegistro= document.getElementById("formularioRegistro")
const registerButton = document.getElementById("registerButton")


let arrayUsuarios = [];

registrarUsuario = (userName,userPassword,userEmail) => {
    if (arrayUsuarios != null){

        let usuario = {
            nombre : userName,
            password : userPassword,
            email : userEmail,
        }
        
        arrayUsuarios.push(usuario);
        alert("REGISTRO COMPLETADO")
        return usuario;
    }

    arrayUsuarios = [{
        nombre : "admin",
            password : "admin",
            email : "admin@hotmail.com",
    }]
    alert("SE CREO USUARIO ADMIN POR DEFECTO")

    }

guardarDatosUser = () => {
 localStorage.setItem("userList",JSON.stringify(arrayUsuarios));    
}

obtenerDatosUser = () => {
    arrayUsuarios = JSON.parse(localStorage.getItem("userList"));
    guardarDatosUser();
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

        if (arrayUsuarios != null){
            
            document.addEventListener("DOMContentLoaded",(obtenerDatosUser()))
        }
    


