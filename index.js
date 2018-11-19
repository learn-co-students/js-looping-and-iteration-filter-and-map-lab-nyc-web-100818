// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  // const revDriv = drivers.filter(function(driver){
  //   return driver.revenue > revenue
  // });
  // return revDriv.map(function(driver) {
  //   return driver.name
  // })

  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  });
}

function exactMatch(extendedDrivers, someObj){
  return extendedDrivers.filter(function(driver){
    if (driver.revenue === someObj.revenue || driver.name === someObj.name)
      return driver
  });
}

function exactMatchToList(extendedDrivers, someObj){
  return exactMatch(extendedDrivers, someObj).map(function(edriver){
    return edriver.name
  });
}
