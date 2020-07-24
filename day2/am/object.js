// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  keys = Object.values(obj);
  console.log(keys);
  for (key in keys){
    /* Check if value for key in object is a primitive */
    if (typeof obj[key] != "object"){
      if (!obj[key]) {
        return true;
      }
    }
    else {
      return hasFalsyValue(obj[key]);
    }
  }
  return false;
};

const shouldBeTrue = [0, 2, null, "Emma", true, false, 0];

console.log(hasFalsyValue(shouldBeTrue));

const shouldBeFalse = [[], {}, "Emma", true, 100];

console.log(hasFalsyValue(shouldBeFalse));