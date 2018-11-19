// // Code your solution here:
// This function takes an array of driver JavaScript objects as the first argument and a number called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.

function driversWithRevenueOver(drivers, revenue) {
  const array = [];
  drivers.map(function(driver) { // or filter
    if (driver.revenue > revenue) {
      array.push(driver);
    }
  });
  return array;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const array = [];
  drivers.filter(function(driver) { // or map
    if (driver.revenue > revenue) {
      array.push(driver.name);
    }
  });
  return array;
}

  // (drivers, { revenue: 3000 })
function exactMatch(drivers, object) {
  const matches = [];
  drivers.map(function(driver) { // or filter
    for (const key in object) {
      if (driver[key] === object[key]) {
        matches.push(driver);
      }
    }
  });

  return matches;
}

function exactMatchToList(drivers, object) {
  const matches = [];
  drivers.filter(function(driver) {
    for (const key in object) {
      if (driver[key] === object[key]) {
        matches.push(driver.name);
      }
    }
  });

  return matches;
}

// This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
