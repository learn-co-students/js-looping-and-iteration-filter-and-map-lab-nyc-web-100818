// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  return drivers.filter(driver => driver.revenue > number);
}

function driverNamesWithRevenueOver(drivers, number) {
  const filteredDrivers = driversWithRevenueOver(drivers, number);
  return filteredDrivers.map(driver => driver.name);
}

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver) {
    key = Object.keys(attr)[0];
    return driver[key] === attr[key];
  });
}

function exactMatchToList(drivers, attr) {
  const filteredDrivers = exactMatch(drivers, attr);
  return filteredDrivers.map(driver => driver.name);
}