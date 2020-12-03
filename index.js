// Write your solution in this file!
const driver = {};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
 
  newObj[key] = value;
 
  return newObj;
}

function deleteFromDriverByKey(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}
