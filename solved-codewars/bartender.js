function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch (param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}
test("return inputs to correct outputs", () => {
    expect.log(getDrinkByProfession("jabrOni")).toBe("Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
    expect.log(getDrinkByProfession("scHOOl counselor")).toBe("Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
    expect.log(getDrinkByProfession("prOgramMer")).toBe("Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
    expect.log(getDrinkByProfession("bike ganG member")).toBe("Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
    expect.log(getDrinkByProfession("poLiTiCian")).toBe("Your tax dollars", "'Politician' should map to 'Your tax dollars'");
    expect.log(getDrinkByProfession("rapper")).toBe("Cristal", "'Rapper' should map to 'Cristal'");
    expect.log(getDrinkByProfession("pundit")).toBe("Beer", "'Pundit' should map to 'Beer'");
    expect.log(getDrinkByProfession("Pug")).toBe("Beer", "'Pug' should map to 'Beer'");

});

/*
alternative:
function getDrinkByProfession(param) {
    var list = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal"
    }
    return list[param.toLowerCase()] || "Beer";
}
*/