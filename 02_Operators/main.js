/*
  Toán tử trong JavaScript – Tổng quan
  Các nhóm chính:
    1. Toán tử số học (Arithmetic)
    2. Toán tử gán (Assignment)
    3. Toán tử so sánh (Comparison)
    4. Toán tử logic (Logical)
    5. Toán tử chuỗi (String)
    6. Toán tử điều kiện (Ternary)
    7. typeof – kiểm tra kiểu dữ liệu
    8. instanceof – kiểm tra kiểu đối tượng
    9. Toán tử khác (Bitwise, Nullish Coalescing, Optional Chaining, etc.)
*/

// 1. Toán tử số học (Arithmetic)
let x = 10;
let y = 3;

console.log(x + y);     // 13 - cộng
console.log(x - y);     // 7  - trừ
console.log(x * y);     // 30 - nhân
console.log(x / y);     // 3.333... - chia
console.log(x % y);     // 1  - chia lấy dư
console.log(x ** y);    // 1000 - lũy thừa (10^3)

x++;                    // x = 11 - tăng 1
y--;                    // y = 2  - giảm 1

// 2. Toán tử gán (Assignment)
let a = 5;
a += 2;                 // a = 7 - cộng rồi gán
a *= 3;                 // a = 21 - nhân rồi gán

// 3. Toán tử so sánh (Comparison)
console.log(5 == "5");      // true  - so sánh giá trị (lỏng)
console.log(5 === "5");     // false - so sánh giá trị & kiểu (chặt)
console.log(5 != "5");      // false - khác giá trị
console.log(5 !== "5");     // true  - khác giá trị hoặc kiểu
console.log(5 > 3);         // true
console.log(5 <= 5);        // true

// 4. Toán tử logic (Logical)
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);  // false - và
console.log(isAdult || hasID);  // true  - hoặc
console.log(!isAdult);          // false - phủ định

// 5. Toán tử chuỗi (String)
let text1 = "Minh";
let text2 = "Nguyen";
let text3 = text1 + " " + text2;
console.log(text3);          // "Minh Nguyen"

// 6. Toán tử điều kiện (Ternary)
let age = 20;
let result = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(result);            // "Đủ tuổi"

// 7. typeof – kiểm tra kiểu dữ liệu
typeof 123;          // "number"
typeof "abc";        // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (đặc điểm riêng của JS)

// 8. instanceof – kiểm tra kiểu đối tượng
let arr = [1, 2, 3];
arr instanceof Array;    // true
arr instanceof Object;   // true
arr instanceof String;   // false

