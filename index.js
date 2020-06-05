// Write your solution in this file!

const driver = {};


// updateDriverWithKeyAndValue(driver, key, value)
// ✓ returns a driver with the original key value pairs and the new key value pair
// ✓ it does not modify the original driver, but rather returns a clone with the new data
function updateDriverWithKeyAndValue(driver, key, value){
    const newObj = {...driver};
    newObj[key] = value;
    return newObj;
}

// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
// ✓ updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

// deleteFromDriverByKey(driver, key)
// ✓ deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// ✓ does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}


// destructivelyDeleteFromDriverByKey(driver, key)
// ✓ returns driver without the delete key/value pair
// ✓ modifies the original driver
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}