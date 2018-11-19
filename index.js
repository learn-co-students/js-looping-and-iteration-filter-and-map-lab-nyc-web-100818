// Code your solution here:
function driversWithRevenueOver(array, number) {
  return array.filter(person => person.revenue > number);
}

function driverNamesWithRevenueOver(array, number) {
  let filter = driversWithRevenueOver(array, number);
  return filter.map(person => person.name);
}

function exactMatch(array, object) {
  return array.filter(obj => Object.values(obj).includes(Object.values(object)[0]));
}

function exactMatchToList(array, object) {
  let filter = exactMatch(array, object);
  return filter.map(object => object.name);
}
