import { style, createVar } from "@vanilla-extract/css";

const padding = createVar();

const border = createVar();
const borderRadius = createVar();

const bgColor = createVar();

export const className = style({
  vars: {
    [padding]: "6px 12px",

    [border]: "1px solid #ccc",
    [borderRadius]: "8px",

    [bgColor]: "white",
  },
  border,
  padding,
  borderRadius,
  transition: "background-color 0.3s ease",
  backgroundColor: bgColor,

  ":focus": {
    outline: "2px solid skyblue",
  },
});
