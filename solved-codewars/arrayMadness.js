function arrayMadness(a, b) {
    let sumKvadratu = 0;
    let sumKubu = 0;

    for (let i = 0; i < a.length; i++) {
        sumKvadratu += a[i] ** 2;

    }

    for (let i = 0; i < b.length; i++) {
        sumKubu += b[i] ** 3;
    }
    return sumKvadratu > sumKubu;
}

test("a daugiau negu b", () => {
    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true);
    expect(arrayMadness([5, 6, 7], [4, 5, 6])).toBe(false);
    expect(arrayMadness([4, 5, 6], [3, 4, 5])).toBe(false);
    expect(arrayMadness([3, 4, 5], [2, 3, 4])).toBe(false);
    expect(arrayMadness([2, 3, 4], [1, 2, 3])).toBe(false);
    expect(arrayMadness([1, 2, 3], [0, 1, 2])).toBe(true);
    expect(arrayMadness([5, 3, 2, 4, 1], [15])).toBe(false);
    expect(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3])).toBe(false);
    expect(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])).toBe(false);
    expect(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])).toBe(true);
    expect(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])).toBe(false);
});