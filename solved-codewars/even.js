function testEven(n) {

    if (n % 2 === 0) {
        return true;
    }

    return false;
}

test("test", () => {
    expect(testEven(0)).toBe(true, "testEven for 0");
    expect(testEven(0.5)).toBe(false, "testEven for 0.5");
    expect(testEven(1)).toBe(false, "testEven for 1");
    expect(testEven(2)).toBe(true, "testEven for 2");
    expect(testEven(-4)).toBe(true, "testEven for 2");
});

