const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return { ...object, [key]: value };
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return driver;
}

function deleteFromDriverByKey(object, key) {
  const driver2 = { ...object };
  delete driver2[key];
  return driver2;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object;
}
