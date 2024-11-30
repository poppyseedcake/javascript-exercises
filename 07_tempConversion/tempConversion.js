const convertToCelsius = function(tempFah) {
  let tempCel = (tempFah - 32) * 5/9;
  tempCel = Math.round(tempCel * 10) / 10;
  return tempCel;
};

const convertToFahrenheit = function(tempCel) {
  let tempFah = tempCel * 9/5 + 32;
  tempFah = Math.round(tempFah * 10) / 10;
  return tempFah;
};

convertToCelsius(32);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
