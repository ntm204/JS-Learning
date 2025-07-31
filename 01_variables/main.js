/*
  Biến trong JavaScript
  - Biến là nơi lưu trữ dữ liệu trong chương trình.
  - Biến có thể thay đổi giá trị trong quá trình thực thi.
  - Biến được khai báo bằng từ khóa var, let, hoặc const.
*/


// var - Cũ, không nền dùng
var a = 10;
var a = 20;         // Có thể khai báo lại trong cùng phạm vi - không nên

// let - thay thế cho var
let b = 30;
b = 40;             // Có thể gán lại
// let b = 50;      // Lỗi: không thể khai báo lại biến let trong cùng phạm vi

// const - Ưu tiên dùng nhất
const PI = 3.14;
// PI = 3.14159;    // Lỗi: không thể gán lại
// const x;         // Lỗi: const bắt buộc có giá trị khi khai báo

// Biến chưa gán giá trị
let status;
console.log(status);  // undefined

// Gán giá trị sau khi khai báo
status = "Minh học JavaScript";
console.log(status);  // "Minh học JavaScript"

// Khai báo nhiều biến cùng lúc
let name = "Minh", age = 20, isStudent = true;

/*
  Khi nào nên dùng var, let, hoặc const
  1. Luôn luôn khai báo biến rõ ràng
  2. Luôn dùng const nếu giá trị không cần thay đổi
  3. Luôn dùng const nếu kiểu dữ liệu không cần thay đổi (ví dụ: Mảng và Đối tượng)
  4. Chỉ dùng let khi bạn không thể dùng const
  5. Chỉ dùng var nếu bạn BẮT BUỘC phải hỗ trợ trình duyệt cũ
*/
