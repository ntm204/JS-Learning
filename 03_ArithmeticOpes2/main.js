/*
  Tiền tố và hậu tố: ++, -- (tăng/giảm giá trị của biến)
  - Tiền tố: ++x (tăng giá trị trước khi sử dụng)
  - Hậu tố: x++ (sử dụng giá trị trước khi tăng)
*/

// Ví dụ 1
let z = 5;
console.log(++z);  // 6 - tiền tố, tăng trước khi in
console.log(z++);  // 6 - hậu tố, in giá trị rồi mới tăng
console.log(z);    // 7 - giá trị sau khi tăng

// Ví dụ 2
let a = 10;
let b = 20;

let result1 = ++a + b;  // a = 11, result1 = 31
let result2 = a++ + b;  // result2 = 31, a = 12 sau khi thực hiện
let result3 = --a + b;  // a = 11, result3 = 31

console.log(result1);  // 31
console.log(result2);  // 31
console.log(result3);  // 31
console.log(a);        // 11 - giá trị cuối cùng của a


