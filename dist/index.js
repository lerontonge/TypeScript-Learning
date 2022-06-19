"use strict";
let sales = 12345;
let course = 'Ts';
let is_published = true;
let numbers = [1, 2, 3];


let plusTen = numbers.forEach(value => value + 10);
console.log(plusTen);



function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2021);
//# sourceMappingURL=index.js.map