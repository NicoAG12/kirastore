
const codigoJuegoInput = document.getElementById("codigoJuego");
const nombreJuegoInput=document.getElementById("nombreJuego");
const descripcionJuegoInput=document.getElementById("descripcionJuego")

const addButton = document.getElementById("buttonAdd")

const juegos = []

const juego = {
    codigo : "",
    nombre : "",
    descripcion : "",
}

localStorage.setItem("juegos",JSON.stringify(juegos));

addButton.addEventListener("click", (e) =>{
    e.preventDefault();

    
   localStorage.setItem("juegos",JSON.stringify(juegos));
    
   if (nombreJuegoInput.value === "" || codigoJuegoInput.value == "" || descripcionJuegoInput == ""){
    alert("Todos los campos son obligatorios")
    return;
   }

   juego.codigo = codigoJuegoInput.value

   juego.nombre = nombreJuegoInput.value

   juego.descripcion = descripcionJuegoInput.value

   agregarJuego();

})

const agregarJuego = () => {
}

