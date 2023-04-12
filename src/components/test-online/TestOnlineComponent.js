import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Countdown from "react-countdown";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function TestOnlineComponent(props) {
  const {} = props;
  const countdown = 100000;
  const [completed, setCompleted] = useState(false);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      setCompleted(true);
    } else {
      return (
        <span style={{marginLeft: "5px"}}>
          {" "}
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  const chooseAnswer = (event, questionNumber) => {
    event.target.style.backgroundColor = "#2e7d32";
    const question_mumber = document.getElementById(questionNumber);
    const chooseAnswer =
      question_mumber.getElementsByClassName("choose-answer");
    for (let item of chooseAnswer) {
      if (event.target !== item) {
        item.style.backgroundColor = "#1976d2";
      }
    }
  };
  return (
    <section
      className="ftco-section ftco-no-pb ftco-no-pt test-online"
      id="chapter-section"
    >
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">ĐỀ THI THỬ THPT QUỐC GIA LẦN 30</h2>
            <h5 className="mb-4">Thời gian làm bài: 21h00 đến 22h30</h5>
            <h5 className="mb-4">Số lượng câu hỏi: 50</h5>
          </div>
        </div>

        <div className="row">
          {completed ? (
            <>
              <div className="col-md-6 completed-test page bg-light text-center">
                <h2 className="heading">Kết quả làm bài</h2>
                <h4>Số câu đúng: 40/50</h4>
                <h4>Điểm: 8</h4>
                <h4>Xếp hạng: 10</h4>
              </div>
              <div className="col-md-6  page text-center">
                <h2 className="heading">Bảng xếp hạng</h2>
                <table>
                  <tbody>
                    <tr>
                      <th>Thứ hạng</th>
                      <th>Tên</th>
                      <th>Điểm</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Phạm Minh Tuấn</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-2 mb-4">
                <nav id="navi" className="nav-question">
                  <ul>
                    <li
                      style={{
                        color: "#dc3545",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AccessAlarmIcon />{" "}
                      <Countdown
                        date={Date.now() + countdown}
                        renderer={renderer}
                      />
                    </li>
                    <li>
                      <a href="#page-1">Câu 1</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-10">
                <div id="page-1" className="page bg-light">
                  <h2 className="heading">Câu 1</h2>
                  <div>
                    <div>
                      <img
                        src="/images/cau-hoi.png"
                        alt="khoa-vd-vdc-toan"
                        width="100%"
                      ></img>
                    </div>

                    <div className="anker mt-4">
                      <Button
                        variant="contained"
                        size="large"
                        onClick={(e) => chooseAnswer(e, "page-1")}
                        className="choose-answer"
                      >
                        Đáp án A
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={(e) => chooseAnswer(e, "page-1")}
                        className="choose-answer"
                      >
                        Đáp án B
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={(e) => chooseAnswer(e, "page-1")}
                        className="choose-answer"
                      >
                        Đáp án C
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={(e) => chooseAnswer(e, "page-1")}
                        className="choose-answer"
                      >
                        Đáp án D
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestOnlineComponent;
