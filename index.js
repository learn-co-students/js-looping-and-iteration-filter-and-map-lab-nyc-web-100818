// Code your solution here:
function driversWithRevenueOver(drivers, r){
  return drivers.filter(function(d){
    return d.revenue > r
  });
};

function driverNamesWithRevenueOver(driver, r){
  return driversWithRevenueOver(driver,r).map(function(d){
    return d.name
  });
};

function exactMatch(drivers, o){
  aKey = Object.keys(o)[0]
  aValue = Object.values(o)[0]

  return drivers.filter(d => d[`${aKey}`] == aValue);
}

function exactMatchToList(drivers, o){
  return exactMatch(drivers, o).map(d => d.name)
}
