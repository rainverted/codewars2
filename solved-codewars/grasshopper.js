var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;

    }
    return sum;
}

test('should return the correct total', function () {
    expect(summation(1)).toBe(1)
})

test('should return the correct total', function () {
    expect(summation(8)).toBe(36)
})


/*
uzduotis - rasti suma is pateiktu skaiciu
-sumai suteikiame nulini kintamaji
-vedame cikla, kai pasirinktam argumentui(skaiciui) pridedame tiek skaiciu, kiek nurodyta funkcijoje esanciame argumente num
*/