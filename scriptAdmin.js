
const codigoJuegoInput = document.getElementById("codigoJuego");
const nombreJuegoInput=document.getElementById("nombreJuego");
const descripcionJuegoInput=document.getElementById("descripcionJuego");
const boton = document.getElementById("botonAceptar")
const contenedor = document.getElementById("crudBox");

const juegos = [];

const columnaCodigo = document.getElementById("1")
const columnaNombre = document.getElementById("2")
const columnaDescrip = document.getElementById("3")
const columnaDisp = document.getElementById("4")
const columnaAcciones = document.getElementById("5")

const mostrarJuegos = () =>{


        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5=document.createElement("p")

        let b1 = document.createElement("button")
        b1.classList.add("fa-solid","fa-star");
        let b2 = document.createElement("button")
        b2.classList.add("fa-solid", "bg-none" , "fa-trash");
        let b3 = document.createElement("button")
        b3.classList.add("fa-solid","fa-pen-to-square");

        let b4 = document.createElement("INPUT");
        b4.type="checkbox";

        p1.textContent= `${codigoJuegoInput.value}`;
        p2.textContent =  `${nombreJuegoInput.value}`
        p3.textContent = `${descripcionJuegoInput.value}`
        
        p4.append(b4);

        p5.append(b1);
        p5.append(b2);
        p5.append(b3);

    
        columnaCodigo.appendChild(p1);
        columnaDisp.appendChild(p4)
        columnaNombre.appendChild(p2);
        columnaDescrip.appendChild(p3);
        columnaAcciones.appendChild(p5);

}   

const anadirJuego = () => {
    juegos.push({
        nombre : nombreJuegoInput.value,
        codigo: codigoJuegoInput.value,
        descripcion: descripcionJuegoInput.value,
    })

    localStorage.setItem("ListaJuegos",JSON.stringify(juegos));
}





boton.addEventListener("click",(e) => {
    mostrarJuegos();
    anadirJuego()
})