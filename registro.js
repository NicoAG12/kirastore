

const registerButton = document.getElementById("registerButton")

const usuario = [
    {
        user_name: "admin",
        user_password: "admin",
        user_email : "admin",
    }
]

localStorage.setItem("userList",JSON.stringify(usuario));

registerButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const userRegister = {
        user_name : document.getElementById("userName").value,
        user_password : document.getElementById("userPassword").value,
        user_email : document.getElementById("userMail").value,
    }

        if (userRegister.user_name == "" || userRegister.user_password == "" || userRegister.user_email == ""){
            alert("Por favor complete todos los campos")
            return;
        }

        if (JSON.parse(localStorage.getItem("userList").includes(userRegister.user_name)) || JSON.parse(localStorage.getItem("userList").includes(userRegister.user_email))  ){
            alert("Usuario o mail existentes, ingrese nuevamente")
        } else{
            usuario.push(userRegister);
            localStorage.setItem("userList",JSON.stringify(usuario));
            alert("Registro completado!")
        }

})



