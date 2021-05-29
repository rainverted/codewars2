function differenceInAges(ages) {
    let youngest = Math.min(...ages);
    let oldest = Math.max(...ages);
    let ageGap = oldest - youngest;
    return [youngest, oldest, ageGap];

}



test("what is the age difference between the oldest and the youngest", () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toStrictEqual([6, 82, 76]);
    expect(differenceInAges([57, 99, 14, 32])).toStrictEqual([14, 99, 85]);
});


