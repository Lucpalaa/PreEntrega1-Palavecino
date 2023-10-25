// Función para realizar una suma de números ingresados por el usuario
function realizarSuma() {
  let suma = 0; // Inicializar la suma en 0
  let loop = true; // Establecer la condición del bucle en verdadero

  console.log("hola"); // Mostrar un mensaje en la consola

  // Entrar en un bucle mientras la variable loop sea verdadera
  while (loop) {
    let input = window.prompt(
      "Ingrese un número positivo para agregarlo a la suma, ingrese -1 para salir"
    );

    // Validar si el input es un número válido
    if (!isNaN(input) && input !== "" && input !== null) {
      let numero = parseInt(input);

      if (numero !== -1) {
        // Si el número ingresado no es -1, agregarlo a la suma
        suma += numero;
      } else {
        // Si el número es -1, salir del bucle
        loop = false;
      }
    } else {
      // Mostrar un mensaje de error si el input no es un número válido
      alert("Por favor, ingrese un número válido.");
    }
  }

  // Mostrar la suma total al usuario
  alert(`Suma: ${suma}`);
}

// Llamar a la función para ejecutar el código
realizarSuma();
