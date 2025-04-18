const timeConversions = {
    // Convert seconds to other units
    secondsToMinutes: (seconds) => seconds / 60,
    secondsToHours: (seconds) => seconds / 3600,
    secondsToDays: (seconds) => seconds / 86400,
  
    // Convert other units to seconds
    minutesToSeconds: (minutes) => minutes * 60,
    hoursToSeconds: (hours) => hours * 3600,
    daysToSeconds: (days) => days * 86400,
  };
  
  module.exports = timeConversions;