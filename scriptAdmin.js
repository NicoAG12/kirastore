
const codigoJuegoInput = document.getElementById("codigoJuego");
const nombreJuegoInput=document.getElementById("nombreJuego");
const descripcionJuegoInput=document.getElementById("descripcionJuego")

const addButton = document.getElementById("buttonAdd")


let añadirParrafo = (x) =>{
    const nuevoParrafo = document.createElement("p");
    const newText = document.createTextNode(x.value);
    nuevoParrafo.appendChild(newText);
    const nuevoDiv = document.getElementById("containerCRUD")
    const hr = document.createElement("hr");
    nuevoDiv.appendChild(nuevoParrafo);
}

addButton.addEventListener("click",(e) =>{
    e.preventDefault;

    añadirParrafo(prompt("Ingrese algo"));
})

