const ftoc = function(tempFah) {
  let celsius = (tempFah - 32) * .5556;
  
  return Math.round(celsius * 10) / 10;
};

const ctof = function(tempCel) {
  let fahrenheit = (tempCel * 1.8) + 32;

  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
