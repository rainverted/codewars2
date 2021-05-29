function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    i = i * 2;
    return i;
}

test("test", () => {
    expect(doubleInteger(2)).toBe(4);
});