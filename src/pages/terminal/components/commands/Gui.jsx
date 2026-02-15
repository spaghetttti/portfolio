import { useContext } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { termContext } from "../Terminal";

const Gui = () => {
  const { history, rerender } = useContext(termContext);
  const navigate = useNavigate();

  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "gui") {
    navigate("/");
  }

  return <span>Redirecting to GUI mode...</span>;
};

export default Gui;
