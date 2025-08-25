let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 0;
let listaNumerosSorteados = [];
let reiniciar = false;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
 
    //console.log(`Llevas ${intentos} ${intentos > 1 ? "intentos": "intento"}`);

    if ((numeroDeUsuario === numeroSecreto)) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos > 1 ? "intentos": "intento"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

        document.querySelector("#intentar").setAttribute("disabled","true");

        
    } else {
        // El jugador no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor"); 
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles"); 
        reiniciar = true;
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();  
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    console.log(reiniciar);
    
    if (reiniciar === false) {
        console.log("Ingresa");
        intentos = 1;
        document.getElementById("intentar").removeAttribute("disabled");
    }
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function reiniciarJuego(params) {
    //
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();

