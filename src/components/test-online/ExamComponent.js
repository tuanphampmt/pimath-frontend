import React, { useEffect, useState } from "react";
import FooterComponent from "../footer/FooterComponent";
import { main1, main2 } from "../../common/js/main";
import HelloTestComponent from "./HelloTestComponent";
import NavbarPublic from "../navbar/NavbarPublic";
import Box from "@mui/material/Box";
import test from "./test.pdf";


function ExamComponent(props) {
 
  useEffect(() => {
    main1();
    main2();
  }, []);

  return (
    <>
      <NavbarPublic />
      <HelloTestComponent />
      <Box sx={{ padding: "0 100px", paddingBottom: "100px", marginTop: "100px" }}>
        <object width="100%" height="600" data={test} type="application/pdf">
          {" "}
        </object>
      </Box>
      <FooterComponent />
    </>
  );
}

export default ExamComponent;
