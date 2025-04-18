const weightConversions = {
    // Convert grams to other units
    gramsToKilograms: (grams) => grams / 1000,
    gramsToPounds: (grams) => grams / 453.592,
    gramsToOunces: (grams) => grams / 28.3495,
  
    // Convert other units to grams
    kilogramsToGrams: (kilograms) => kilograms * 1000,
    poundsToGrams: (pounds) => pounds * 453.592,
    ouncesToGrams: (ounces) => ounces * 28.3495,
  };
  
  module.exports = weightConversions;