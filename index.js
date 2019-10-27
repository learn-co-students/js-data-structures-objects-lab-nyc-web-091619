// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
// returns a driver with the original key value pairs and the new key value pair:
    const newObj = { ...driver };   // use spread operator to copy original driver obj value

    newObj[key] = value;            // add new key-value pair

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
//   updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver:
    driver[key] = value;            // update driver's key-value pairs directly (no copy)
    return driver;
}

function deleteFromDriverByKey(driver, key) {
//   deletes `key` from a clone of driver and returns the new driver (it is non-destructive):
    const newObj = Object.assign({}, driver);   // copy driver object to newObj

    delete newObj[key];                         // delete the targeted key

    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
//   returns driver without the delete key/value pair:
    delete driver[key];             // delete the targetted key directly

    return driver;
}

// destructivelyDeleteFromDriverByKey(driver, key)
//   modifies the original driver:
