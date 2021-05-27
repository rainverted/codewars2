function correctPolishLetters(string) {
    const polish = 'ąćęłńóśźż';
    const latin = 'acelnoszz';
    let convertedString = '';

    for (let i = 0; i < string.length; i++) {
        const raide = string[i];
        let convertedLetter = raide;                // ł

        for (let p = 0; p < polish.length; p++) {
            const polishLetter = polish[p];

            if (polishLetter === convertedLetter) {
                convertedLetter = latin[p];         // l
            }
        }

        convertedString += convertedLetter;         // l
    }

    return convertedString;
}

test("is string without the use of the Polish letters", () => {
    expect(correctPolishLetters("Jędrzej Błądziński")).toBe("Jedrzej Bladzinski");
    expect(correctPolishLetters("Lech Wałęsa")).toBe("Lech Walesa");
    expect(correctPolishLetters("Maria Skłodowska-Curie")).toBe("Maria Sklodowska-Curie");

});


/*
function correctPolishLetters (string) {
  return string
  .replace(/ł/, 'l')
  .replace(/ą/, 'a')
  .replace(/ć/, 'c')
  .replace(/ę/, 'e')
  .replace(/ń/, 'n')
  .replace(/ó/, 'o')
  .replace(/ś/, 's')
  .replace(/ź/, 'z')
  .replace(/ż/, 'z')
}

*/