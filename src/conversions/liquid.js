const liquidConversions = {
    // Convert liters to other units
    litersToMilliliters: (liters) => liters * 1000,
    litersToGallons: (liters) => liters / 3.78541,
    litersToCups: (liters) => liters * 4.22675,
  
    // Convert other units to liters
    millilitersToLiters: (milliliters) => milliliters / 1000,
    gallonsToLiters: (gallons) => gallons * 3.78541,
    cupsToLiters: (cups) => cups / 4.22675,
  };
  
  module.exports = liquidConversions;