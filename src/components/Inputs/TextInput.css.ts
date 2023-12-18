import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../css/sprinkles.css";

export const className = style([
  sprinkles({
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
      darkMode: "gray-700",
    },

    color: {
      lightMode: "gray-700",
      darkMode: "white",
    },

    transitionProperty: "all",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",
  }),
  {
    ":focus": {
      outline: "thin solid gray-400",
    },
  },
]);
