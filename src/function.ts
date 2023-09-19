function calcTax(income: number) {
  // return type set to number(auto)
  return income;
}
function calcTax2(income: number, year = 2020): number {
  // defining return type to avoid mistakes
  if (income < 50000) {
    return income * 1.2;
  }
  return income * 1.3;
}

calcTax2(10000); // here 2nd parameter year is optional (using ? in argc)
// we can give default values in argc example: year = 2020 in line 5 or year?: number
