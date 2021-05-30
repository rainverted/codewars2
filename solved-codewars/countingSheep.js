function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((sheep) => sheep === true).length;
}

//alternative - boolean object passes the value as the first parameter is converted to a boolean value, if necessary. 
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}



test("test", () => {
    var array1 = [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true];

});

/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/