import React, { useEffect, useState } from "react";
import FooterComponent from "../footer/FooterComponent";
import { main1, main2 } from "../../common/js/main";
import HelloTestComponent from "./HelloTestComponent";
import NavbarPublic from "../navbar/NavbarPublic";
import Box from "@mui/material/Box";
import test from "./test.pdf";
import NavbarComponent from "../navbar/NavbarComponent";
import HeroWrapComponent from "../hello-world/HelloWorldComponent";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ExecuteTestComponent from "./ExecuteTestComponent";

function ExamDetailsComponent(props) {
  const dispatch = useDispatch();
  const [start, setStart] = useState(false);
  useEffect(() => {
    main1();
    main2();
  }, []);

  const handleStartTest = () => {
    setStart(true);
    // dispatch({
    //   type: "START_TEST_ONLINE",
    //   payload: true,
    // });
  };

  const handleEndTest = () => {
    setStart(true);
    // dispatch({
    //   type: "START_TEST_ONLINE",
    //   payload: true,
    // });
  };
  return (
    <>
      <div className="max-w-[1140px] m-auto ">
        <NavbarComponent />
        <HeroWrapComponent />
      </div>
      <Box
        sx={{ padding: "0 100px", paddingBottom: "50px", marginTop: "50px" }}
        className="text-center"
      >
        {/* <object width="100%" height="600" data={test} type="application/pdf">
          {" "}
        </object> */}

        {start ? (
          <Button
            variant="contained"
            size="large"
            onClick={handleEndTest}
            className="pacifico pt-4 pb-4"
          >
            Nộp bài
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={handleStartTest}
            className="pacifico pt-4 pb-4"
          >
            Bắt đầu thi thử
          </Button>
        )}

        {start && <ExecuteTestComponent />}
      </Box>
      <FooterComponent />
    </>
  );
}

export default ExamDetailsComponent;
