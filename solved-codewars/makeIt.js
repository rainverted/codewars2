const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const fuelCount = mpg * fuelLeft;

    if (distanceToPump <= fuelCount) {
        return true;
    }
    return false;
};


test("Sample Tests", function() {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);
  });


  /*
  You were camping with your friends far away from home, but when it's time to go back, 
  you realize that your fuel is running out and the nearest pump is 50 miles away! 
  You know that on average, your car runs on about 25 miles per gallon. 
  There are 2 gallons left. Considering these factors, write a function that tells you
   if it is possible to get to the pump or not. Function should return true (1 in Prolog) 
  if it is possible and false (0 in Prolog) if not. The input values are always positive.

  distanceToPump = 50 miles
  1 gallon = 25 miles
  left 2 gallons

  
  */