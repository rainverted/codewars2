function litres(time) {
    let litres = 0.5;
    let needLitres = litres * time;

    if (time > litres) {
        return Math.floor(needLitres);
    }

    return 0;
}

test('Tests', () => {
    expect(litres(2)).toBe(1, 'should return 1 litre');
    expect(litres(1.4)).toBe(0, 'should return 0 litres');
    expect(litres(12.3)).toBe(6, 'should return 6 litres');
    expect(litres(0.82)).toBe(0, 'should return 0 litres');
    expect(litres(11.8)).toBe(5, 'should return 5 litres');
    expect(litres(1787)).toBe(893, 'should return 893 litres');
    expect(litres(0)).toBe(0, 'should return 0 litres');
});


//alternative 
function litres(time) {
    return Math.floor(time * 0.5);
}