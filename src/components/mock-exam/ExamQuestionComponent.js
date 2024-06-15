import React from "react";
import Tex2SVG from "react-hook-mathjax";
import parse from "html-react-parser";

function ExamQuestionComponent({ question }) {
  const [lastValidInput, setLastValidInput] = React.useState("");
  const [error, setError] = React.useState(null);
  const getErrorFromHTML = (html) =>
    html.children[1].firstChild.firstChild.attributes["data-mjx-error"].value;
  console.log(question.question);
  return (
    <>
      {parse(question.question, {
        replace: (domNode) => {
          console.log(domNode);
          if (domNode.attribs && domNode.attribs.class === "question-mathjax") {
            console.log(domNode.children[0].data);
            return (
              <Tex2SVG
                display="block"
                class={!!lastValidInput ? "tex-border text-question" : ""}
                tabindex={-1}
                latex={domNode.children[0].data}
                onSuccess={() => setLastValidInput(domNode.children[0].data)}
                onError={(html) => setError(getErrorFromHTML(html))}
              />
            );
          }
        },
      })}
    </>
  );
}

export default ExamQuestionComponent;
