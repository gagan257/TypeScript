"use strict";
function weightconv(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
weightconv(10);
weightconv("10kg");
//# sourceMappingURL=union.js.map