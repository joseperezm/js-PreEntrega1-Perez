function calcularTiempoParaSiguienteGrado(){
  let seguirCalculando = true;

  while(seguirCalculando){
    let gradoActual = prompt("¿Cuál es tu grado actual? (blanco, azul, purpura, cafe, negro)").toLowerCase();
    let añosEntrenando = parseInt(prompt("¿Cuántos años llevas entrenando?"));

    let añosParaSiguienteGrado = 0;
    let gradoSiguiente = "";

    if(gradoActual === "blanco"){
      if(añosEntrenando >= 0){
        añosParaSiguienteGrado = 2 - añosEntrenando;
        gradoSiguiente = "azul";
      } else {
        alert("Debe haber ingresado un número positivo de años.");
        seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
        continue;
      }
    } else if(gradoActual === "azul"){
      if(añosEntrenando >= 2){
        añosParaSiguienteGrado = 5 - añosEntrenando;
        gradoSiguiente = "purpura";
      } else {
        alert("No llevas el tiempo suficiente para tener el grado azul...");
        seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
        continue;
      }
    } else if(gradoActual === "purpura"){
      if(añosEntrenando >= 5){
        añosParaSiguienteGrado = 7 - añosEntrenando;
        gradoSiguiente = "cafe";
      } else {
        alert("No llevas el tiempo suficiente para tener el grado purpura...");
        seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
        continue;
      }
    } else if(gradoActual === "cafe"){
      if(añosEntrenando >= 7){
        añosParaSiguienteGrado = 10 - añosEntrenando;
        gradoSiguiente = "negro";
      } else {
        alert("No llevas el tiempo suficiente para tener el grado cafe...");
        seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
        continue;
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

    if(añosParaSiguienteGrado >= 0) {
      alert(`Te faltan ${añosParaSiguienteGrado} años para obtener el grado ${gradoSiguiente}. ¡Vamos que se puede!`);
    } else {
      alert(`¡Ya has superado el tiempo necesario para obtener el grado ${gradoSiguiente}! Te recomiendo hables con tu instructor...`);
    }

    seguirCalculando = confirm("¿Deseas calcular el tiempo para el siguiente grado de nuevo?");
  }
}

calcularTiempoParaSiguienteGrado();
