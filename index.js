// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(x => x.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, number) {
  var filteredDrivers = driversWithRevenueOver(drivers, number);
  return filteredDrivers.map(x => x.name);
};

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver) {
    key = Object.keys(attr)[0];
    return driver[key] === attr[key];
  });
};

function exactMatchToList(drivers, attr) {
  const filteredDrivers = exactMatch(drivers, attr);
  return filteredDrivers.map(driver => driver.name);
};
