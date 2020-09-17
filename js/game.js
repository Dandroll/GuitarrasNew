function play() {
    var respuesta;
    var respuestaCorrecta = "celeste";
    var nombre = document.getElementById("nombre").value;
    var pistas = ["No es Roja ni azul", "Como el color del cielo..."];
    if(nombre === "")
    {
        alert("Debe ingresar su nombre para poder iniciar el juego...");
    }
    else
    {

        for(var i=4; i>0; i--){
            respuesta = prompt("De que color era la Telecaster?(" + i + " intentos restantes):");
            if(respuesta.toLowerCase() === respuestaCorrecta){
                alert("Bien hecho, has ganado! ;D");
                break;
            }
            if(i == 3){
                alert("Pista 1: " + pistas[0]);
            }
            if(i == 2){
                alert("Pista 2: " + pistas[1]);
            }
            if(i == 1){
                alert("Game Over, suerte para la proxima ;)")
            }
        }
    }
}