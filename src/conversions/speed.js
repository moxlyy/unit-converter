const speedConversions = {
    // Convert meters per second to other units
    metersPerSecondToKilometersPerHour: (mps) => mps * 3.6,
    metersPerSecondToMilesPerHour: (mps) => mps * 2.23694,
  
    // Convert other units to meters per second
    kilometersPerHourToMetersPerSecond: (kmph) => kmph / 3.6,
    milesPerHourToMetersPerSecond: (mph) => mph / 2.23694,
  };
  
  module.exports = speedConversions;