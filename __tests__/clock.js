function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}

test("return milliseconds since midnight", () => {
    expect(past(0, 1, 1)).toBe(61000)
    expect(past(1, 1, 1)).toBe(3661000)
    expect(past(0, 0, 0)).toBe(0)
    expect(past(1, 0, 1)).toBe(3601000)
    expect(past(1, 0, 0)).toBe(3600000)
});

/*

1s = 1000 ml
1m = 60s * 1000ml = 60000ml
1h = 60m * 60000ml = 3600000 ml

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

alternative:
function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);

  return Math.round(setTime - midnight);
}
*/