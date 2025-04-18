const distanceConversions = {
    // Convert meters to other units
    metersToKilometers: (meters) => meters / 1000,
    metersToMiles: (meters) => meters / 1609.34,
    metersToFeet: (meters) => meters * 3.28084,
    metersToInches: (meters) => meters * 39.3701,
  
    // Convert other units to meters
    kilometersToMeters: (kilometers) => kilometers * 1000,
    milesToMeters: (miles) => miles * 1609.34,
    feetToMeters: (feet) => feet / 3.28084,
    inchesToMeters: (inches) => inches / 39.3701,
  };
  
  module.exports = distanceConversions;