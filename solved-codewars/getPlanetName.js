function getPlanetName(id) {
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
    }[id]
}

test('teisingi planetu pavadinimai', () => {
    expect(getPlanetName(2)).toBe('Venus');
    expect(getPlanetName(3)).toBe('Earth');
    expect(getPlanetName(5)).toBe('Jupiter');
})