function century(year) {

    return Math.ceil(year / 100);
}

test("should return century given year is in", () => {
    expect(century(1705)).toBe(18, 'Testing for year 1705');
    expect(century(1900)).toBe(19, 'Testing for year 1900');
    expect(century(1601)).toBe(17, 'Testing for year 1601');
    expect(century(2000)).toBe(20, 'Testing for year 2000');
    expect(century(89)).toBe(1, 'Testing for year 89');
});

//Math.ceil() function always rounds a number up to the next largest integer