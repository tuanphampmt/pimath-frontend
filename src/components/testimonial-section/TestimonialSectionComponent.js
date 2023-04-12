import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

function TestimonialSectionComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-section testimony-section ftco-no-pb"
      id="testimonial-section"
    >
      <div
        className="img img-bg border"
        style={{ backgroundImage: "url(/images/bg_4.jpg)" }}
      />
      <div className="overlay" />
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 text-center heading-section heading-section-white ftco-animate">
            <span className="subheading">PI GROUP</span>
            <h2 className="mb-3">
              MỘT SỐ NHẬN XÉT CỦA CÁC ANH CHỊ SAU KHI HOÀN THÀNH KHÓA HỌC PIMAX
              PLUS
            </h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      Khó lắm ạ , nhưng bù lại em học được những mẹo hay (có thể
                      nói là tà đạo), các bạn trong gr dễ thương, hòa đồng, có
                      thánh Sang giải bài siêu đỉnh luôn.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-1.webp)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "15px" }}>
                            họa nhưng chất lượng thì ko...phải bàn cãi gì nữa,
                            đề và đáp án rất có tâm có tầm, khiến e ngộ ra cách
                            giải cx như cách tư duy của 1 số dạng bài VDC và nhờ
                            đó e có động lực hơn để chinh phục 8+ 9+ .kì thi kết
                            thúc, ssoos điểm làm e cx tạm hài lòng và nếu được
                            nói vs các e 2k4.5....n , hãy chọn Pimax và a Tuấn
                            ạ. E cảm ơn a và team rất nhiều.
                          </span>
                        }
                        placement="top"
                      >
                        <span>
                          Khóa luyện đề của a Tuấn thực sự làm nâng tầm tư duy
                          của e lên, ấn tượng ban đầu là đề khá lạ và khác so vs
                          đề e làm trên lớp hoặc nx bộ đề phát triển minh...
                        </span>
                      </Tooltip>
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-2.png)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "15px" }}>
                            đã tự làm được đến 9,6 điểm môn toán. Theo cảm nhận
                            của em pimax là bộ tài liệu tuyệt vời. Nó ko chỉ gò
                            bó trong một khuôn khổ nào đó mà nó hướng đến tiêu
                            chí em thấy quan trọng nhất trong việc học toán. Đó
                            là sự sáng tạo. Đi kèm với đó là sự khó kinh khủng
                            khiếp của các bài tập trong đó. Nếu em nào mà hướng
                            đến mục tiêu 9,2 9,4 toán thì pimax sẽ là lựa chọn
                            rất tốt. Và một điều rất quan trọng nữa đó là gr
                            chat pimax với những đại cao thủ từ khắp nơi tập hợp
                            đến. Em đã học hỏi được rất nhiều từ các cao thủ đó.
                            Cảm ơn anh vì khoá học!
                          </span>
                        }
                        placement="top"
                      >
                        <span>
                          Em chào anh. Em cũng không biết nó có tự hiện tên mình
                          ko nên cứ giới thiệu lại vậy. Em là Anh Quân, hs đã
                          mua khoá học pimax 2021. Kì thi thptqg vừa qua...
                        </span>
                      </Tooltip>
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-3.png)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "15px" }}>
                            kí nhóm. Ahihi
                          </span>
                        }
                        placement="top"
                      >
                        <span>
                          Em không biết cảm ơn nhóm Pi thế nào ạ. Nhóm giúp em
                          rèn luyện bản thân va trao dồi kiến thức rất hay về
                          môn toán. Em sẽ rủ thêm mấy đứa em để đăng...
                        </span>
                      </Tooltip>
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-4.png)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "15px" }}>
                            trì khóa học! mọi người rất tâm khuyết
                          </span>
                        }
                        placement="top"
                      >
                        <span>
                          Đề hay, độc, lạ. Nhiều câu khó đến siêu khó. Có điều
                          là nhiều câu vẫn có những lỗi sai ngớ ngẩn. Mong anh
                          khắc phục ngay lỗi này nếu vẫn còn muốn duy...
                        </span>
                      </Tooltip>
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-5.jpeg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "15px" }}>
                            các admin rất nhiều ạ.
                          </span>
                        }
                        placement="top"
                      >
                        <span>
                          Dạ em không biết nhóm từ đầu mà mãi về sau em mới biết
                          nhưng em thấy đề toán của nhóm rất hay và khó đáng để
                          ôn luyện thử sức ạ. Cảm ơn anh Tuấn và...
                        </span>
                      </Tooltip>
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-6.webp)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "15px" }}>
                            triển để tụi em an tâm ôn bài để đi thi đều chứa đầy
                            sự nhiệt huyết và tâm tình trong đấy. Em muốn gửi
                            lời cảm ơn chân thành và sâu sắc tới đội ngũ pimax,
                            luôn hết mình và cống hiến vì các đàn em thân yêu.
                            Hi vọng anh vẫn tiếp tục và tụi em sẽ luôn ủng hộ
                            anh yêu anh và yêu nhóm Pi.
                          </span>
                        }
                        placement="top"
                      >
                        <span>
                          Dạ rất tốt và chất lượng. Từ việc ra đề cho tới những
                          lần soạn bài, soạn tài liệu cho tụi em, anh đều làm
                          rất trau chuốt, chỉnh chu. Kể cả việc soạn cả đống pài
                          phát...
                        </span>
                      </Tooltip>
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(/images/user-7.png)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Ẩn danh</p>
                        <span className="position">Học sinh Khoá Pimax</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

TestimonialSectionComponent.propTypes = {};

export default TestimonialSectionComponent;
