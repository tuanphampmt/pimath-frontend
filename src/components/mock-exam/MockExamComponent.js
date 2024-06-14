import React, { useEffect, useState } from "react";
import FooterComponent from "../footer/FooterComponent";
import { Link } from "react-router-dom";
import { main1, main2 } from "../../common/js/main";
import ExecuteTestComponent from "./ExecuteTestComponent";
import { useSelector, useDispatch } from "react-redux";
import ExamComponent from "./ExamComponent";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import NavbarComponent from "../navbar/NavbarComponent";
import HeroWrapComponent from "../hello-world/HelloWorldComponent";

function MockExamComponent(props) {
  const start = useSelector((state) => state.testOnline.start);
  useEffect(() => {
    main1();
    main2();
  }, []);

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };
  return (
    <>
      <div className="max-w-[1140px] m-auto ">
        <NavbarComponent />
        <HeroWrapComponent />
      </div>
      {/* <TestOnlineComponent />
      <HelloTestComponent /> */}
      <Box sx={{ padding: "0 100px", marginTop: "50px" }}>
        <h2
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "40px",
          }}
        >
          Tổng Hợp Đề Thi Thử Nhóm Pi
        </h2>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            maxWidth: 375,
            marginBottom: "40px",
            textAlign: "right",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm bài thi"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <ExamComponent />
          <ExamComponent />
          <ExamComponent />
          <ExamComponent />
          <ExamComponent />
          <ExamComponent />
        </Box>
        <Stack spacing={2} sx={{ margin: "40px 0px" }}>
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            color="primary"
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Stack>
      </Box>
      <FooterComponent />
    </>
  );
}

export default MockExamComponent;
