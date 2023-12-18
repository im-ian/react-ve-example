import { createVar, style } from "@vanilla-extract/css";
import { sprinkles } from "../../css/sprinkles.css";

const inputWidthVar = createVar();

export const className = style([
  sprinkles({
    height: "2.5rem",

    padding: "medium",
    borderRadius: "medium",

    background: {
      lightMode: "white",
      darkMode: "gray-700",
    },

    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: {
      lightMode: "gray-300",
      darkMode: "white",
    },

    fontSize: "1x",

    color: {
      lightMode: "gray-700",
      darkMode: "white",
    },

    transitionProperty: "all",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",
  }),
  {
    vars: {
      [inputWidthVar]: "100%",
    },
    width: inputWidthVar,
    ":focus": {
      outline: "thin solid gray-400",
    },
  },
]);
