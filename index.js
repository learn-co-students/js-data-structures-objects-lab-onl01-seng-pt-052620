// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, val) {
  return Object.assign({}, driver, {[key]: val});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  driver[key] = val;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = {...driver};
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
