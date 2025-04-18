const convert = (value, sourceUnit, targetUnit) => {
  if (isNaN(value)) {
    return 'Invalid value. Please provide a numeric value.';
  }

  if (!sourceUnit || !targetUnit) {
    return 'Invalid units. Please provide both source and target units.';
  }

  if (sourceUnit === 'meters' && targetUnit === 'kilometers') {
    return distance.metersToKilometers(value);
  } else if (sourceUnit === 'celsius' && targetUnit === 'fahrenheit') {
    return temperature.celsiusToFahrenheit(value);
  } else if (sourceUnit === 'grams' && targetUnit === 'pounds') {
    return weight.gramsToPounds(value);
  } else if (sourceUnit === 'mps' && targetUnit === 'kmph') {
    return speed.metersPerSecondToKilometersPerHour(value);
  } else if (sourceUnit === 'liters' && targetUnit === 'gallons') {
    return liquid.litersToGallons(value);
  } else if (sourceUnit === 'seconds' && targetUnit === 'minutes') {
    return time.secondsToMinutes(value);
  }
  return 'Conversion not supported.';
};