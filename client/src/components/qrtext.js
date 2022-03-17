import { useState } from "react";

function Text({ setQrText }) {
  const [text, setText] = useState("We are the weeeeneeeerssss!");

  setQrText(text);

  return <>Hoorah!</>;
}

export default Text;
