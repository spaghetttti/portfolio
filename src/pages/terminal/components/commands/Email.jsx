import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:asil9802mum@gmail.com", "_self");
  }

  return (
    <Wrapper>
      <span>asil9802mum@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
