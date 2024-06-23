// let input =
//   "tính ích phân \\[\\int\\limits_0^4 {\\left[ {4{{\\rm{e}}^{2x}} + 3f\\left( x \\right)} \\right]{\\rm{d}}x} \\].";

let input = `<ruby class='ruby'>   Gọi [{x_1},{x_2}left( {{x_1} < {x_2}} right)] là các nghiệm của phương trình [log _{frac{1}{3}}^2x - 5{log _3}x + 6 = 0.] . Tính [. T = frac{{{x_2}}}{{{x_1}}}.]</ruby>`;
input = JSON.stringify(input);
// Sử dụng hàm replace để thay thế các phần tử trong chuỗi
let output = input
  .replaceAll(/\\/g, "\\\\") // Thêm dấu \ trước mỗi dấu \
  .replaceAll(/\[/g, "<span class='math'>") // Thêm dấu \ trước [
  .replaceAll(/\]/g, "<\\span>") // Thêm dấu \ trước ]
  .replaceAll(/\{/g, "\\\\{") // Thêm dấu \ trước {
  .replaceAll(/\}/g, "\\\\}") // Thêm dấu \ trước }
  .replaceAll(/\(/g, "\\\\(") // Thêm dấu \ trước (
  .replaceAll(/\)/g, "\\\\)") // Thêm dấu \ trước )
  .replaceAll(/\./g, "\\\\."); // Thêm dấu \ trước .

console.log(output);

// // Thay thế các ký tự đặc biệt và định dạng chuỗi
// let output = input
//   .replace(/\\/g, "\\\\") // Thêm dấu \ trước mỗi dấu \
//   .replace(/\[/g, "<span class='math'>") // Thay thế [ thành <ruby>tính tích phân <span class='math'>
//   .replace(/\]/g, "</span>"); // Thay thế ] thành </span></ruby>

// console.log(output);
