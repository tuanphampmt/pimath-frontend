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
            <h2 className="mb-4 pacifico">Các khoá học của Pi</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4">
            <nav id="navi">
              <ul>
                <li>
                  <a href="#page-1">KHOÁ HỌC PIMATH</a>
                </li>
                <li>
                  <a href="#page-2">KHOÁ HỌC PIX</a>
                </li>
                <li>
                  <a href="#page-3">KHOÁ HỌC PIY</a>
                </li>
                <li>
                  <a href="#page-4">KHOÁ HỌC PIZ</a>
                </li>
                <li>
                  <a href="#page-5">HỌC PHÍ VÀ KHUYẾN MÃI</a>
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
              <h2 className="heading pacifico">KHÓA HỌC PIMATH</h2>
              <div>
                <div>
                  <strong>Chào</strong> các em, anh là Administrator của NHÓM
                  PIMATH, anh xin giới thiệu về khóa:
                </div>
                <div style={{ marginTop: "7px" }}>
                  - <strong>Khóa</strong> học PIMATH của NHÓM PI là khóa VẬN
                  DỤNG – VẬN DỤNG CAO về môn Toán. Khóa này dành cho những bạn
                  có mục tiêu điểm 8+ đổ lên, rất phù hợp cho những bạn thi vào
                  trường top.
                </div>
                <div style={{ marginTop: "7px" }}>
                  - <strong>Khóa</strong> học này tất cả bài tập đều là câu hỏi
                  VẬN DỤNG – VẬN DỤNG CAO do anh sưu tầm và biên soạn từ các đề
                  thi thử của các trường trên cả nước và sưu tầm từ nhiều nguồn
                  khác nhau. Đây khóa tài liệu, không có video, tất cả bài tập
                  đều ở dạng file pdf có lời giải và được học trên web. Mọi thắc
                  mắc không hiểu bài trong quá trình học thì các em nhắn tin
                  trực tiếp cho anh hoặc admin để hỏi bài. Sẽ có nhóm messenger
                  và group facebook để hỏi bài, trao đổi và thi thử.
                </div>

                <div style={{ marginTop: "7px" }}>
                  Khóa học PIMATH gồm có các khóa sau:
                </div>
                <div style={{ marginTop: "7px" }}>
                  - KHÓA HỌC TỔNG ÔN CHUYÊN ĐỀ VD VDC (Bài tập lọc theo dạng
                  chuyên đề)
                </div>
                <div style={{ marginTop: "7px" }}>
                  - KHÓA HỌC LUYỆN ĐỀ NÂNG CAO (Đề thi thử chuẩn cấu trúc bộ
                  nhưng khó hơn)
                </div>
                <div style={{ marginTop: "7px" }}>
                  - KHÓA HỌC TRỊ SAU NGU (Đề thi thử ở mức nhận biết thông hiểu)
                </div>
                <div style={{ marginTop: "7px" }}>
                  - KHÓA HỌC VỀ ĐÍCH VD VDC (Bài tập lọc từ đề thi thử các
                  trường sở năm học mới nhất)
                </div>
              </div>
            </div>
            <div id="page-2" className="page bg-light two">
              <h2 className="heading pacifico">KHÓA HỌC PIX</h2>
              <div>
                <div>
                  <strong>KHÓA</strong> HỌC PIX là là khóa ôn thi Đánh Giá Năng
                  lực HÀ NỘI-HỒ CHÍ MINH-CÔNG AN-SƯ PHẠM, Đánh Giá Tư Duy BÁCH
                  KHOA HÀ NỘI.
                </div>

                <div style={{ marginTop: "15px" }}>
                  <strong>KHÓA</strong> này là khóa tài liệu bao gồm luyện đề
                  chuẩn cấu trúc mới nhất full các môn, luyện theo chuyên đề,
                  dạng Toán nâng cao trắc nghiệm và tự luận.
                </div>
              </div>
            </div>
            <div id="page-3" className="page bg-light three">
              <h2 className="heading pacifico">KHÓA HỌC PIY</h2>
              <div>
                <div>
                  <strong>KHÓA</strong> HỌC PIY là là khóa ôn thi các môn Lý,
                  Hóa, Sinh, Anh, Văn, Sinh, Sử, Địa.
                </div>

                <div style={{ marginTop: "15px" }}>
                  <strong>KHÓA</strong> này là khóa tài liệu bao gồm luyện đề
                  các trường sở chuẩn cấu trúc mới nhất, bài tập chuyên đề VD
                  VDC lọc theo chương.
                </div>
              </div>
            </div>
            <div id="page-4" className="page bg-light three">
              <h2 className="heading pacifico">KHÓA HỌC PIZ</h2>
              <div>
                <div>
                  <strong>KHÓA</strong> HỌC PIY là là khóa ôn thi HSG tỉnh,
                  thành phố môn Toán.
                </div>

                <div style={{ marginTop: "15px" }}>
                  <strong>KHÓA</strong> này là khóa tài liệu bao gồm luyện đề
                  thi HSG các tỉnh. Luyện các dạng Toán VD VDC trắc nghiệm lẫn
                  tự luận.
                </div>
              </div>
            </div>
            <div id="page-5" className="page bg-light four">
              <h2 className="heading pacifico">HỌC PHÍ VÀ KHUYẾN MÃI</h2>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>Tên khoá học</th>
                      <th>Học phí</th>
                    </tr>
                    <tr>
                      <td className="pr-20">KHOÁ PIMATH</td>
                      <td>449,000 VNĐ</td>
                    </tr>

                    <tr>
                      <td>KHÓA HỌC PIX</td>
                      <td>149,000 VNĐ</td>
                    </tr>

                    <tr>
                      <td>KHÓA HỌC PIY</td>
                      <td>149,000 VNĐ</td>
                    </tr>
                    <tr>
                      <td>KHÓA HỌC PIZ</td>
                      <td>100,000 VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: "15px" }}>
                <strong>KHUYẾN MÃI SỐC khi mua: </strong>
                <div>- PIMATH + PIX hoặc PIMATH + PIY: giảm còn 550k</div>
                <div>- PIMATH + PIX + PIY: giảm còn 600k và tặng KHÓA PIZ</div>
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
