import _ from "lodash";
import theme from "../components/styles/themes";

/**
 * Generates html tabs
 * @param {number} num - The number of tabs
 * @returns {string} tabs - Tab string
 */
export const generateTabs = (num = 0) => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

/**
 * Check arg is valid
 */
export const isArgInvalid = (arg, action, options) =>
  arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

/**
 * Transform current cmd & arg into array
 */
export const getCurrentCmdArry = (history) =>
  _.split(history[0].trim(), " ");

/**
 * Check current render makes redirect
 */
export const checkRedirect = (rerender, currentCommand, command) =>
  rerender &&
  currentCommand[0] === command &&
  currentCommand[1] === "go" &&
  currentCommand.length > 1 &&
  currentCommand.length < 4 &&
  _.includes([1, 2, 3, 4], parseInt(currentCommand[2]));

/**
 * Check current render makes redirect for theme
 */
export const checkThemeSwitch = (rerender, currentCommand, themes) =>
  rerender &&
  currentCommand[0] === "themes" &&
  currentCommand[1] === "set" &&
  currentCommand.length > 1 &&
  currentCommand.length < 4 &&
  _.includes(themes, currentCommand[2]);

/**
 * Perform advanced tab actions
 */
export const argTab = (inputVal, setInputVal, setHints, hintsCmds) => {
  if (inputVal === "themes ") {
    setInputVal(`themes set`);
    return [];
  }

  else if (
    _.startsWith("themes", _.split(inputVal, " ")[0]) &&
    _.split(inputVal, " ")[1] !== "set" &&
    _.startsWith("set", _.split(inputVal, " ")[1])
  ) {
    setInputVal(`themes set`);
    return [];
  }

  else if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  else if (_.startsWith(inputVal, "themes set ")) {
    _.keys(theme).forEach(t => {
      if (_.startsWith(t, _.split(inputVal, " ")[2])) {
        hintsCmds = [...hintsCmds, t];
      }
    });
    return hintsCmds;
  }

  else if (inputVal === "projects " || inputVal === "socials ") {
    setInputVal(`${inputVal}go`);
    return [];
  }

  else if (inputVal === "projects g" || inputVal === "socials g") {
    setInputVal(`${inputVal}o`);
    return [];
  }

  else if (_.startsWith(inputVal, "socials go ")) {
    ["1.Github", "2.LinkedIn", "3.Dev.to", "4.Twitter"].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }

  else if (_.startsWith(inputVal, "projects go ")) {
    [
      "1.Portfolio",
      "2.ParlayPlay", 
      "3.BulkSignature",
      "4.UGL Trucks",
    ].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }
};
