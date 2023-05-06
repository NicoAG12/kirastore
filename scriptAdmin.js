
const codigoJuegoInput = document.getElementById("codigoJuego");
const nombreJuegoInput=document.getElementById("nombreJuego");
const descripcionJuegoInput=document.getElementById("descripcionJuego");
const buttonAgregarJuego = document.getElementById("buttonAceptar")
const contenedor = document.getElementById("crudBox");

const URLimagen = document.getElementById("URLimagen");



const columnaCodigo = document.getElementById("1")
const columnaNombre = document.getElementById("2")
const columnaDescrip = document.getElementById("3")
const columnaDisp = document.getElementById("4")
const columnaAcciones = document.getElementById("5")


const divMain = document.getElementById("Perro");

const juegos = [];

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
        imagen: URLimagen.value,
    })

    localStorage.setItem("ListaJuegos",JSON.stringify(juegos));
}

const gamesJsonParseados = JSON.parse(localStorage.getItem("ListaJuegos"))

console.log(gamesJsonParseados);

const crearCard = () => {
    const newCard = gamesJsonParseados.map((juego)=>{
        return `  <div class="card" style="width: 18rem;">
        <img src="${juego.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${juego.nombre}</h5>
          <p class="card-text">${juego.descripcion}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> }`;
       
    })
    
       divMain.appendChild(newCard);
}

console.log(divMain);

buttonAgregarJuego.addEventListener("click",(e) => {
    mostrarJuegos();
    anadirJuego();
   
})

 crearCard();