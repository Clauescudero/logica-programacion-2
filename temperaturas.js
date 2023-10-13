function convertirTemperatura(celsius) {
    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9/5) + 32;
  
    
    return {
      celsius: celsius,
      kelvin: kelvin,
      fahrenheit: fahrenheit
    };
  }
  

  var temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));
  
  
  if (!isNaN(temperaturaCelsius)) {
    
    var resultados = convertirTemperatura(temperaturaCelsius);
    console.log("Grado Celsius introducido: " + resultados.celsius + " °C");
    console.log("Grados Kelvin: " + resultados.kelvin + " K");
    console.log("Grados Fahrenheit: " + resultados.fahrenheit + " °F");
  } else {
    console.log("Por favor, ingrese un número válido.");
  }

  