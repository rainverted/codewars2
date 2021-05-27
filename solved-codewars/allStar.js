function strCount(str, letter) {
    let letterCount = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === letter) {
            letterCount++;
        }

    }
    return letterCount;
}
test("jei suranda tinkama raide nurodo ju kieki", () => {
    expect(strCount('Hello', 'o')).toBe(1);
    expect(strCount('Hello', 'l')).toBe(2);
    expect(strCount('', 'z')).toBe(0);
});


