function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;
    var resultText = document.getElementById("resultText");

    if (unitInput === "celsius") {
      var fahrenheit = (temperatureInput * 9/5) + 32;
      var kelvin = parseFloat(temperatureInput) + 273.15;

      resultText.innerHTML = temperatureInput + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit and " + kelvin + " Kelvin.";
    } else if (unitInput === "fahrenheit") {
      var celsius = (temperatureInput - 32) * 5/9;
      var kelvin = (temperatureInput - 32) * 5/9 + 273.15;

      resultText.innerHTML = temperatureInput + " degrees Fahrenheit is equal to " + celsius + " degrees Celsius and " + kelvin + " Kelvin.";
    } else if (unitInput === "kelvin") {
      var celsius = temperatureInput - 273.15;
      var fahrenheit = (temperatureInput - 273.15) * 9/5 + 32;

      resultText.innerHTML = temperatureInput + " Kelvin is equal to " + celsius + " degrees Celsius and " + fahrenheit + " degrees Fahrenheit.";
    }
  }