// Code your solution here:
function driversWithRevenueOver(driver, testRevenue){
  const result = driver.filter( function(filtered_object) {
      return filtered_object.revenue >= testRevenue
    })
  return result
}

function driverNamesWithRevenueOver(driver, testRevenue){
  const result = driversWithRevenueOver(driver, testRevenue).map ( x=> x.name)
  return result
}

function exactMatch(drivers, condition){
    const result = drivers.filter(function (x) {
    for (key in condition) { return x[key] === condition[key]}
  })
    return result
  };

function exactMatchToList(drivers, condition){
  const result = exactMatch(drivers, condition).map ( x=> x.name)
  return result 
}
