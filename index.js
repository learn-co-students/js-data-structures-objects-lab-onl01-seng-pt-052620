let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const newObject = {...driver}
    newObject[key] = value
    return newObject 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value 
    return driver 
}

function deleteFromDriverByKey(driver, key){
    let newObject = Object.assign({}, driver)
    delete newObject[key]
    return newObject
}


function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver 
}


// deleteFromDriverByKey() - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.