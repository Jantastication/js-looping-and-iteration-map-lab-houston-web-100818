// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  let newDrivers = drivers.map(function(driver) {
    let split = driver.split(" ");
    return Object.assign({}, { firstName: split[0] }, { lastName: split[1] });
  });
  return newDrivers;
}

function attributesToPhrase(drivers) {
  let phrase = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phrase;
}
