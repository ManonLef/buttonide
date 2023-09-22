import { useState } from "react";
import BtnCreator from "./BtnCreator";

function DefaultTWButtons() {
  const [txt, setTxt] = useState("clickerty");

  const firstProp = {
    text: txt,
    style:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    onClick: console.log("clicked first"),
  };
  
  return (
    <BtnCreator
      onClick={firstProp.onClick}
      text={firstProp.text}
      style={firstProp.style}
    />
  );
}

export default DefaultTWButtons;
