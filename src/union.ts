function weightconv(weight: number | string): number {
  // weight can be a number or string choice is given
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// calling ways
weightconv(10);
weightconv("10kg");
