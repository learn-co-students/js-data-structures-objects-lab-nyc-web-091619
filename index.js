const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key] : value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    return Object.assign({}, driver[key].delete) //interesting this works
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver;
}

