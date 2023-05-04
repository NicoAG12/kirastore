

const registerButton = document.getElementById("registerButton")

const usuario = [
    {
        user_name: "admin",
        user_password: "admin",
        user_email : "admin",
    }
]



registerButton.addEventListener("click", (e) =>{
    e.preventDefault();

    const userRegister = {
        user_name : document.getElementById("userName").value,
        user_password : document.getElementById("userPassword").value,
        user_email : document.getElementById("userMail").value,
    }
  
    usuario.push(userRegister);

    localStorage.setItem("userList",JSON.stringify(usuario));

})
