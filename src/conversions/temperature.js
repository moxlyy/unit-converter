const temperatureConversions = {
    // Convert Celsius to other units
    celsiusToFahrenheit: (celsius) => (celsius * 9) / 5 + 32,
    celsiusToKelvin: (celsius) => celsius + 273.15,
  
    // Convert Fahrenheit to other units
    fahrenheitToCelsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
    fahrenheitToKelvin: (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15,
  
    // Convert Kelvin to other units
    kelvinToCelsius: (kelvin) => kelvin - 273.15,
    kelvinToFahrenheit: (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32,
  };
  
  module.exports = temperatureConversions;