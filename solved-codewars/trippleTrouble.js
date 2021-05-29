function tripleTrouble(one, two, three) {
    let str = '';
    one = one.split('');
    two = two.split('');
    three = three.split('');

    for (let i = 0; i < one.length; i++) {
        str += one[i] + two[i] + three[i];

    }
    return str;
}

test("test", () => {
    expect(tripleTrouble("this", "test", "lock")).toBe("ttlheoiscstk");
    expect(tripleTrouble("aa", "bb", "cc")).toBe("abcabc");
    expect(tripleTrouble("Bm", "aa", "tn")).toBe("Batman");
    expect(tripleTrouble("LLh", "euo", "xtr")).toBe("LexLuthor");
});

/*
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.


methods:
split() or chArt() can be used
*/