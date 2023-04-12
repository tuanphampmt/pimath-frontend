import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function HelloTestComponent(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartTestOnline = () => {
    setOpen(false);
    dispatch({
      type: "START_TEST_ONLINE",
      payload: true,
    });
  };
  return (
    <section className="hero-wrap js-fullheight">
      <div className="overlay" />
      <div className="container-fluid px-0">
        <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
          <img
            className="one-third js-fullheight align-self-end order-md-last img-fluid"
            src="/images/undraw_book_lover_mkck.svg"
            alt=""
          />
          <div className="one-forth d-flex align-items-center ftco-animate js-fullheight">
            <div className="text mt-5">
              <span className="subheading">
                THE BEST OR NOTHING - TỐT NHẤT HOẶC KHÔNG CÓ GÌ
              </span>
              <h1>Nhóm Pi - Group Luyện Đề Thi Thử Nâng Cao ︵✿ρмт‿✿</h1>
              <p>
                Nhóm Pi mang sứ mệnh dìu dắt các em đến gần hơn với cánh cổng
                đại học. Nhóm mang giá trị cốt lõi của một người lái đò và luôn
                gắn liền với “sự hoàn hảo, niềm đam mê và trách nhiệm".
              </p>

              <a
                href="#open"
                className="btn btn-primary py-3 px-4"
                onClick={handleClickOpen}
              >
                Bắt đầu thi thử
              </a>
            </div>
          </div>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Ghi danh</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Bạn hãy nhập đúng họ tên và email của mình để hệ thông tính điểm
              và xếp hạng
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Họ và tên"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Huỷ</Button>
            <Button onClick={handleStartTestOnline}>Bắt đầu thi</Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
}

export default HelloTestComponent;
