import React from "react";
import Tex2SVG from "react-hook-mathjax";

function MathjaxComponent({ mathjax }) {
  return (
    <Tex2SVG display="block" tabindex={-1} latex={mathjax}>
      <span>tuan</span>
    </Tex2SVG>
  );
}

export default MathjaxComponent;
