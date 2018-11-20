// Code your solution here:

//driversWithRevenueOver takes an array of driver JavaScript objects as the first argument and a number called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

//works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount.
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
  // this basically uses driversWithRevenueOver to get the array of drivers with revenue > revenue(argument) and then chains the .map() method to the resulting array to pull out only names of the drivers satisfying the condition
};

// This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value
function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

// This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name.
function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(function (driver) {
    return driver.name;
  })

};
