function driversWithRevenueOver(driver, revenue) {
  const result = driver.filter(function(obj) {
    return obj.revenue >= revenue
    })
    return result
}

function driverNamesWithRevenueOver(driver, revenue) {
  const result = driversWithRevenueOver(driver, revenue).map(function(driver){
    return driver.name
  });
    return result
  }

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    for (const key in obj) {
      return driver[key] === obj[key]
    }
  });
}

function exactMatchToList(drivers, obj) {
  const result = exactMatch(drivers, obj).map(function(driver) {
    return driver.name
  })
  return result
}
