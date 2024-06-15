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

  // Mảng để lưu các đối tượng câu hỏi
  const questionObjects = [];
  // Duyệt qua từng câu hỏi và tạo object tương ứng
  questions.forEach((question, index) => {
    let lines = splitQuestion(question, index);
    console.log(lines);
    const title = lines[0].trim();

    let options = [];
    if (lines.slice(1)[0]) {
      const optionsLine = lines.slice(1)[0].trim();

      // Tách các đáp án thành mảng options
      options = optionsLine.split("\t").map((option) => {
        option = option.trim();
        option = option.replace(/\\\[|\\\]/g, "");
        option = option.replace(/\s/g, "\\ ");
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

    questionTitle = questionTitle.replace(/\\\[|\\\]/g, "");
    questionTitle = questionTitle.replace(/\s/g, "\\ ");

    questionObjects.push({
      number: index + 1,
      title: questionTitle,
      options: options,
    });
  });

  // Lưu vào file JSON
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
  const regex = /^Câu \d+:?\s+/;
  // Loại bỏ "u 1:  " hoặc "Câu 1:  " từ đầu câu hỏi
  const formattedQuestion = question.replace(regex, "");

  // Tách tiêu đề và các đáp án
  let lines = formattedQuestion.trim().split("\n");
  console.log(lines.length);
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
