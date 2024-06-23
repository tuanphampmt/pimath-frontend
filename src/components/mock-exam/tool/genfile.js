const fs = require("fs");
const path = require("path");

// Đọc nội dung từ file
const filePath = path.join(__dirname, "./data/questions.txt");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Có lỗi xảy ra khi đọc file:", err);
    return;
  }
  // Tách các câu hỏi
  const questions = data.trim().split("\nCâu ");
  // console.log(questions)

  // Mảng để lưu các đối tượng câu hỏi
  const questionObjects = [];
  // Duyệt qua từng câu hỏi và tạo object tương ứng
  questions.forEach((question, index) => {
    let lines = splitQuestion(question, index);
    const title = lines[0].trim();

    let options = [];
    if (lines.slice(1)[0]) {
      const optionsLine = lines.slice(1)[0].trim();

      // Tách các đáp án thành mảng options
      options = optionsLine.split("\t").map((option) => {
        option = option.trim();
        option = option.replace(/\\\[|\\\]/g, "");
        option = option.replace(" ", "\\");
        return option;
      });
    }

    // Loại bỏ ký tự đầu tiên trong title (sau khi tách bởi 'Câu ')
    let questionTitle = "";
    if (index !== 0) {
      questionTitle = title.slice(2).trim();
    } else {
      questionTitle = title;
    }

    questionTitle = replaceSpacesOutsideBraces(questionTitle);
    // console.log(questionTitle);
    questionObjects.push({
      number: index + 1,
      question: questionTitle,
      options: options,
    });
  });

  // // Lưu vào file JSON
  const jsonFilePath = path.join(__dirname, "questions.json");
  fs.writeFile(
    jsonFilePath,
    JSON.stringify(questionObjects, null, 4),
    "utf8",
    (err) => {
      if (err) {
        console.error("Có lỗi xảy ra khi ghi file:", err);
      } else {
        console.log("Đã lưu dữ liệu vào file questions.json");
      }
    }
  );
});

const splitQuestion = (question, index) => {
  // Biểu thức chính quy để loại bỏ "u 1:  " hoặc "Câu 1:  "
  const regex = /^Câu \d+[:.]\s*/;
  // // Loại bỏ "u 1:  " hoặc "Câu 1:  " từ đầu câu hỏi
  const formattedQuestion = question.replace(regex, "");

  // Tách tiêu đề và các đáp án
  let lines = formattedQuestion.trim().split("\n");

  if (lines.length > 2) {
    // Loại bỏ ký tự '\r' từ mỗi phần tử trong mảng lines
    lines = lines.map((line) => line.replace(/\r/g, ""));
    // Loại bỏ các phần tử rỗng trong mảng
    lines = lines.filter((item) => item.trim() !== "");
  }

  // Kết hợp các phần tử phù hợp
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].endsWith(":")) {
      lines[i] += " " + lines[i + 1];
      lines.splice(i + 1, 1);
    }
  }
  return lines;
};

function replaceSpacesOutsideBraces(str) {
  // console.log(str);
  // console.log(str + str.includes("\\"));
  str = replaceFirstSymbol(str);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "$") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === "$") {
          let mathjax = str.slice(i + 1, j);
          mathjax = replaceLastDot(mathjax);
          result += `<span class='question-mathjax'>${mathjax}</span>`;
          // console.log(mathjax);
          i = j;
          break;
        }
      }
    }
    // else if (str[i] === "[") {
    //   for (let j = i + 1; j < str.length; j++) {
    //     let mathjax = "";
    //     if (str[j] === "[") {
    //       mathjax += str.slice(i + 1, j - 1);
    //       for (let k = j + 1; k < str.length; k++) {
    //         if (str[k] === "]") {
    //           mathjax += str.slice(j, k);
    //           mathjax = replaceLastDot(mathjax);
    //           // result += `<span class='question-mathjax'>${mathjax}</span>`;
    //           j = k;
    //           break;
    //         }
    //       }
    //       // console.log(mathjax);
    //     }
    //     if (str[j] === "]") {
    //       mathjax += str.slice(i + 1, j);
    //       mathjax = replaceLastDot(mathjax);
    //       result += `<span class='question-mathjax'>${mathjax}</span>`;
    //       i = j;
    //       break;
    //     }
    //   }
    // }
    // else if (str[i] === "{") {
    //   for (let j = i + 1; j < str.length; j++) {
    //     if (str[j] === "}") {
    //       let mathjax = str.slice(i, j + 1);
    //       mathjax = replaceLastDot(mathjax);
    //       result += `<span class='question-mathjax'>${mathjax}</span>`;
    //       console.log(mathjax);
    //       i = j;
    //       break;
    //     }
    //   }
    // }
    // else if (str[i] + str[i + 1] === "pi") {
    //   let mathjax = "\\" + str[i] + str[i + 1];
    //   result += `<span class='question-mathjax'>${mathjax}</span>`;
    //   i++;
    // }
    // else if (
    //   isUpperCase(str[i]) &&
    //   str[i - 1] !== "." &&
    //   str[i - 2] !== "." &&
    //   ![0, 1, 2, 3, 4, 5, 6].includes(i)
    // ) {
    //   // console.log(i);
    //   result += ". " + str[i];
    // }
    else {
      result += str[i];
    }
    // else if (str[i] !== "\\") {
    //   result += str[i];
    // }
  }
  // console.log(result + result.includes("\\"));
  result = escapeBackslashes(result);
  // console.log(result.includes("/"));
  result = `<ruby class='ruby'>${result}</ruby>`;
  console.log(result + result.includes("\\\\"));
  result = result.replaceAll("$", "");

  return result;
}

function replaceFirstSymbol(str) {
  // Sử dụng regex để thay thế dấu ':' hoặc '.'
  str = str.replace(/\./, "");
  return replaceFirstColon(str);
}

function replaceFirstColon(str) {
  // Tìm vị trí của dấu : đầu tiên
  let index = str.indexOf(":");
  if (index !== -1) {
    // Thay thế dấu : đầu tiên
    return str.substring(0, index) + str.substring(index + 1);
  }
  return str;
}

function isUpperCase(character) {
  // Kiểm tra nếu character là một chữ cái
  if (
    (character >= "A" && character <= "Z") ||
    (character >= "a" && character <= "z")
  ) {
    // So sánh character với chính nó sau khi được chuyển đổi thành chữ hoa
    return character === character.toUpperCase();
  } else {
    // Nếu không phải là chữ cái, trả về false
    return false;
  }
}

function replaceLastDot(str) {
  // Sử dụng biểu thức chính quy để tìm và thay thế dấu chấm cuối cùng
  return str.replace(/\.(?=[^.]*$)/, "");
}

function escapeBackslashes(str) {
  // Sử dụng biểu thức chính quy để thay thế dấu gạch chéo ngược đơn thành gạch chéo kép
  return str
    .replaceAll(/\\/g, "\\")
    .replaceAll(/\\\[/g, "<span class='question-mathjax'>")
    .replaceAll(/\\\]/g, `</span>`); // Thêm dấu \ trước mỗi dấu \
}

// escapeBackslashes(
//   "Tính \\[\\int\\limits_0^4 {\\left[ {4{{\\rm{e}}^{2x}} + 3f\\left( x \\right)} \\right]{\\rm{d}}x} \\]."
// );
