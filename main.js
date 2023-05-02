function calcularTiempoParaSiguienteGrado(){
  let seguirCalculando = true;

  while(seguirCalculando){
    let gradoActual = prompt("¿Cuál es tu grado actual? (azul, purpura, cafe, negro)");
    let añosEntrenando = parseInt(prompt("¿Cuántos años llevas entrenando?"));

    let añosParaSiguienteGrado = 0;
    let gradoSiguiente = "";

    if(gradoActual === "azul"){
      if(añosEntrenando >= 2){
        añosParaSiguienteGrado = 5 - añosEntrenando;
        gradoSiguiente = "purpura";
      } else {
        añosParaSiguienteGrado = 2 - añosEntrenando;
        gradoSiguiente = "azul";
      }
    } else if(gradoActual === "purpura"){
      if(añosEntrenando >= 5){
        añosParaSiguienteGrado = 7 - añosEntrenando;
        gradoSiguiente = "cafe";
      } else {
        añosParaSiguienteGrado = 5 - añosEntrenando;
        gradoSiguiente = "purpura";
      }
    } else if(gradoActual === "cafe"){
      if(añosEntrenando >= 7){
        añosParaSiguienteGrado = 10 - añosEntrenando;
        gradoSiguiente = "negro";
      } else {
        añosParaSiguienteGrado = 7 - añosEntrenando;
        gradoSiguiente = "cafe";
      }
    } else if(gradoActual === "negro"){
      alert("¡Felicidades, ya eres cinturón negro!");
      seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
      continue;
    } else {
      alert("El grado ingresado no es válido.");
      seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
      continue;
    }

    alert(`Te faltan ${añosParaSiguienteGrado} años para obtener el grado ${gradoSiguiente}.`);
    seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
  }
}

calcularTiempoParaSiguienteGrado();
