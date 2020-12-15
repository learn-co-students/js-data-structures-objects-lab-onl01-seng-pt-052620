// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
return Object.assign({}, driver, { [key]: value });

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key, value){
    const newObj = Object.assign({}, driver);

    delete newObj[key];
    delete newObj[value];
    return newObj;

}

function destructivelyDeleteFromDriverByKey(driver, key, value){

    delete driver[key];
    delete driver[value];
    return driver;
}