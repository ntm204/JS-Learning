/*
  Toán tử gán (Assignment Operators)
  - Gán giá trị cho biến, có thể kết hợp với các toán tử số học
  = += -= *= /= %= **=   <<= >>= >>>= &= ^= |=
*/

let a = 10;
let b = 5;

// Gán giá trị
a = b; // a = 5
console.log(`Giá trị của a sau khi gán: ${a}`); // In ra giá trị của a

// Gán và cộng
a += b; // a = a + b => a = 5 + 5 => a = 10

// Gán và trừ
a -= b; // a = a - b => a = 10 - 5 => a = 5

// Gán và nhân
a *= b; // a = a * b => a = 5 * 5 => a = 25

// Gán và chia
a /= b; // a = a / b => a = 25 / 5 => a = 5

// Gán và lấy phần dư
a %= b; // a = a % b => a = 5 % 5 => a = 0

// Gán và lũy thừa
a **= b; // a = a ** b => a = 0 ** 5 => a = 0

// Gán và dịch trái
a <<= 1; // a = a << 1 => a = 0 << 1 => a = 0

// Gán và dịch phải
a >>= 1; // a = a >> 1 => a = 0 >> 1 => a = 0

// Gán và dịch phải không dấu
a >>>= 1; // a = a >>> 1 => a = 0 >>> 1 => a = 0

// Gán và AND bitwise
a &= b; // a = a & b => a = 0 & 5 => a = 0

// Gán và OR bitwise
a |= b; // a = a | b => a = 0 | 5 => a = 5

// Gán và XOR bitwise
a ^= b; // a = a ^ b => a = 5


