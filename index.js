// Code your solution here:
function driversWithRevenueOver (array, revenue) {
  return array.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue)
  .map (function(driver) {
    return driver.name;
  });
}

function exactMatch (array, object) {
  return array.filter (function (driver) {
    let exactMatches = [];
    for (const key in object) {
      exactMatches = driver[key] === object[key]
    }
    console.log(exactMatches);
    return exactMatches
  });
}

function exactMatchToList(array, object) {
  return exactMatch(array, object)
  .map (function(driver) {
    return driver.name;
  });
}
