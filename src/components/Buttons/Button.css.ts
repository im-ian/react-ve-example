import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../css/sprinkles.css";
import { vars } from "../../css/vars.css";

export const className = style([
  sprinkles({
    height: "2.5rem",

    padding: "medium",
    borderRadius: "medium",
    borderWidth: "none",

    background: "brand-400",

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
    cursor: "pointer",
    ":hover": {
      background: vars.color["brand-500"],
    },
  },
]);
