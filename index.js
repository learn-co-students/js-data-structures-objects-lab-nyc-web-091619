// Write your solution in this file!
let driver = {'name': 'Sam'};

function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = Object.assign({}, driver);
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let destroyDriver = Object.assign({}, driver);
    delete destroyDriver[key];
    return destroyDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}