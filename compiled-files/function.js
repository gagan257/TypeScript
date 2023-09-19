"use strict";
function calcTax(income) {
    return income;
}
function calcTax2(income, year = 2020) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
calcTax2(10000);
//# sourceMappingURL=function.js.map