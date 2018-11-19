// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
}


function exactMatch (drivers, object) {
  return drivers.filter(function (driver) {
    let match = false;
    for (const key in object) {
      match = driver[key] === object[key];
    }
    return match;
  });
}

function exactMatchToList (drivers, object) {
  return exactMatch(drivers, object)
    .map(function (driver) {
      return driver.name;

    });
}
