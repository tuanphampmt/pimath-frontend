import React from "react";
import PropTypes from "prop-types";

function ChapterSectionComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-section ftco-no-pb ftco-no-pt"
      id="chapter-section"
    >
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">Các khoá học của Pi</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4">
            <nav id="navi">
              <ul>
                <li>
                  <a href="#page-1">KHOÁ PIMAX PLUS 2023</a>
                </li>
                <li>
                  <a href="#page-2">KHÓA HỌC CÔNG PHÁ VD – VDC MÔN TOÁN</a>
                </li>
                <li>
                  <a href="#page-3">
                    KHÓA HỌC CÔNG PHÁ VD – VDC MÔN LÝ HÓA SINH
                  </a>
                </li>

                <li>
                  <a href="#page-4">HỌC PHÍ VÀ KHUYẾN MÃI</a>
                </li>
                {/*
                <li>
                  <a href="#page-5">Foreword</a>
                </li>
                <li>
                  <a href="#page-6">Prologue</a>
                </li>
                <li>
                  <a href="#page-7">Epilogue</a>
                </li>
                <li>
                  <a href="#page-8">Epigraph</a>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="col-md-9">
            <div id="page-1" className="page bg-light one">
              <h2 className="heading">Khoá Pimax Plus 2023</h2>
              <div>
                <div>
                  <strong>Chào</strong> các em, anh là Administrator của NHÓM PI
                  , anh xin giới thiệu về khóa:
                </div>
                <div style={{ marginTop: "7px" }}>
                  <strong>Khóa</strong> học PIMAX PLUS của NHÓM PI là khóa VẬN
                  DỤNG – VẬN DỤNG CAO về các môn Toán, Lý, Hóa, Sinh, Anh. Khóa
                  này dành cho những bạn có mục tiêu điểm 8+ đổ lên, rất phù hợp
                  cho những bạn thi vào trường top.
                </div>
                <div style={{ marginTop: "7px" }}>
                  <strong>Năm</strong> nay anh quyết định đặt tên cho khóa 2k5
                  là PIMAX PLUS bởi vì anh muốn nó gắng kết với NHÓM PI nhiều
                  hơn và cũng chính vì đó anh chăm chút và đầu tư nhiều hơn nữa
                  để giúp các em tiến gần hơn với cánh cổng đại học.
                </div>
                <div style={{ marginTop: "7px" }}>
                  <strong>Đây</strong> là khóa kế thừa sự thành công của khóa
                  2k2, 2k3 với nhiều con 10 toán và nhiều điểm trên 9 khác, có
                  những đánh giá rất tích cực về khóa học và anh rất hạnh phúc
                  vì điều đó và anh sẽ cố gắng đầu tư hơn nữa để khóa học hoàn
                  thiện hơn, mong muốn dìu dắt lứa 2k5 chinh phục cánh cổng đại
                  học ^.^
                </div>
                <div style={{ marginTop: "7px" }}>
                  <strong>Khóa</strong> học này tất cả bài tập đều là câu hỏi
                  VẬN DỤNG – VẬN DỤNG CAO do anh sưu tầm và biên soạn từ các đề
                  thi thử của các trường trên cả nước và sưu tầm từ nhiều nguồn
                  khác nhau. Đây khóa tài liệu, không có video, tất cả bài tập
                  đều ở dạng file pdf, được lưu ở google drive. Khi các em đăng
                  ký thành công thì anh sẽ thêm email của các em vào khóa trên
                  google drive. Mọi thắc mắc không hiểu bài trong quá trình học
                  thì các em nhắn tin trực tiếp cho anh hoặc admin để hỏi bài.
                  Sẽ có nhóm mess và group facebook để hỏi bài nha các em.
                </div>

                <div style={{ marginTop: "7px" }}>
                  <strong>Đây</strong> là hình ảnh khóa học PIMAX PLUS 2023:{" "}
                  <br />
                  <img
                    src="/images/pimax.png"
                    alt="khoa-pimax"
                    width="100%"
                    style={{ marginTop: "20px" }}
                  ></img>
                </div>
              </div>
            </div>
            <div id="page-2" className="page bg-light two">
              <h2 className="heading">KHÓA HỌC CÔNG PHÁ VD – VDC MÔN TOÁN</h2>
              <div>
                <div>
                  <strong>KHÓA</strong> HỌC CÔNG PHÁ VD – VDC MÔN TOÁN là con
                  của Khoá Pimax Plus 2023
                </div>

                <div style={{ marginTop: "7px" }}>
                  <strong>Đây </strong>là hình ảnh KHÓA HỌC CÔNG PHÁ VD – VDC
                  MÔN TOÁN <br />
                  <img
                    src="/images/vd-vdc-toan.png"
                    alt="khoa-vd-vdc-toan"
                    width="100%"
                    style={{ marginTop: "20px" }}
                  ></img>
                </div>

                <div style={{ marginTop: "15px" }}>
                  <strong>KHÓA</strong> HỌC CÔNG PHÁ VD – VDC MÔN TOÁN gồm 4
                  khóa con:
                  <ul>
                    <li>
                      <strong>KHÓA TỔNG ÔN CHUYÊN ĐỀ VD - VDC:</strong> Đây là
                      khóa Toán tổng ôn theo từng chuyên đề VD - VDC lớp 11 và
                      12. Bài tập đa dạng phong phú và lời giải siêu chi tiết
                      được anh sưu tầm và biên soạn tỉ mỉ. Anh đánh giá đây là
                      một khóa rất hay để các em tổng ôn kiến thức.
                      <div style={{ marginTop: "15px" }}>
                        <img
                          src="/images/chuyen-de.png"
                          alt="khoa-chuyen-de"
                          width="100%"
                        ></img>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src="/images/chuyen-de-1.png"
                          alt="khoa-chuyen-de"
                          width="100%"
                        ></img>
                      </div>
                      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <img
                          src="/images/chuyen-de-2.png"
                          alt="khoa-chuyen-de"
                          width="100%"
                        ></img>
                      </div>
                    </li>
                    <li>
                      <strong>KHÓA VD – VDC VỀ ĐÍCH:</strong> Đây là khóa luyện
                      bài tập tổng hợp kiến thức vận dụng – vận dụng cao. Mỗi đề
                      gồm 15 câu vận dụng – vận dụng cao. Bài tập được anh tổng
                      hợp từ đề thi thử các trường năm 2023.
                    </li>
                    <li>
                      <strong>KHÓA LUYỆN ĐỀ NÂNG CAO: </strong>Đây là khóa luyện
                      đề nâng cao, chính là đề mà các em thi thử hằng tuần ở
                      Nhóm Pi, nhưng khi mua Khóa học PIMAX PLUS thì các em
                      không cần thi vẫn có đáp án chi tiết, còn không các em
                      phải bắt buộc thi thử hằng tuần mới có đáp án. Mỗi đề gồm
                      50 câu, trong đó 30 câu đầu ở mức nhận biết – thông hiểu,
                      10 câu sau là vận dụng và 10 câu cuối là vận dụng cao. Anh
                      đánh giá đây là khóa học cần có để các em làm quen với
                      việc luyện đề.
                    </li>
                    <li>
                      Ngoài 3 khóa trên còn có một phần khá quan trọng tài{" "}
                      <strong>TÀI LIỆU ĐỌC THÊM</strong>:
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src="/images/doc-them.png"
                          alt="khoa-chuyen-de"
                          width="100%"
                        ></img>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="page-3" className="page bg-light three">
              <h2 className="heading">
                KHÓA HỌC CÔNG PHÁ VD – VDC MÔN LÝ HÓA SINH
              </h2>
              <div>
                <div style={{ marginTop: "7px" }}>
                  <strong>Khóa</strong> học này tất cả bài tập đều là câu hỏi
                  VẬN DỤNG – VẬN DỤNG CAO do anh sưu tầm và biên soạn từ các đề
                  thi thử của các trường trên cả nước và sưu tầm từ nhiều nguồn
                  khác nhau. Để học được khoá này các em phải nắm chắc kiến thức
                  cơ bản và mục tiêu điểm cao trên 8+.
                </div>
                <div style={{ marginTop: "7px" }}>
                  <strong>KHÓA</strong> HỌC CÔNG PHÁ VD – VDC MÔN LÝ HÓA SINH
                  gồm 2 khóa con:
                  <ul>
                    <li>
                      <strong>KHOÁ TỔNG ÔN CHUYÊN ĐỀ VD - VDC:</strong> Đây là
                      khóa tổng ôn theo từng chuyên đề VD - VDC lớp 11 và 12.
                      Bài tập đa dạng phong phú và lời giải siêu chi tiết được
                      anh sưu tầm và biên soạn tỉ mỉ. Anh đánh giá đây là một
                      khóa rất hay để các em tổng ôn kiến thức.{" "}
                      <strong>
                        Lưu ý: Chỉ có 2 môn Lý, Hoá là có khoá này, môn Sinh
                        không có.{" "}
                      </strong>
                    </li>
                    <li>
                      <strong>KHOÁ VỀ ĐÍCH VD - VDC:</strong> Đây là khóa luyện
                      bài tập tổng hợp kiến thức vận dụng – vận dụng cao. Mỗi đề
                      gồm 15 câu vận dụng – vận dụng cao. Bài tập được anh tổng
                      hợp từ đề thi thử các trường năm 2023.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="page-4" className="page bg-light four">
              <h2 className="heading">HỌC PHÍ VÀ KHUYẾN MÃI</h2>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>Tên khoá học</th>
                      <th>Học phí</th>
                    </tr>
                    <tr>
                      <td>KHOÁ PIMAX PLUS 2023</td>
                      <td>600,000 VNĐ</td>
                    </tr>

                    <tr>
                      <td>KHÓA HỌC CÔNG PHÁ VD - VDC MÔN TOÁN</td>
                      <td>500,000 VNĐ</td>
                    </tr>

                    <tr>
                      <td>KHÓA HỌC CÔNG PHÁ VD - VDC MÔN LÝ HÓA SINH</td>
                      <td>200,000 VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: "15px" }}>
                <strong>KHUYẾN MÃI: </strong>Khi mua KHOÁ PIMAX PLUS 2023 sẽ
                được tặng cuốn sách Toán "BỘ ĐỀ THI THỬ NÂNG CAO 2023" (trị giá
                150,000 VNĐ) cho 50 bạn nhanh đăng ký nhanh nhất.
                <br />
              </div>
            </div>
            {/*
            <div id="page-5" className="page bg-light five">
              <h2 className="heading">Foreword</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
            <div id="page-6" className="page bg-light six">
              <h2 className="heading">Prologue</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
            <div id="page-7" className="page bg-light seven">
              <h2 className="heading">Epilogue</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
            <div id="page-8" className="page bg-light eight">
              <h2 className="heading">Epigraph</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

ChapterSectionComponent.propTypes = {};

export default ChapterSectionComponent;
