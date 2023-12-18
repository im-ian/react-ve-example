import { style, styleVariants } from "@vanilla-extract/css";

export const flexClassName = style({
  display: "flex",
});

export const flexItemClassName = style({
  flex: "1",
});

export const flexDirectionVariant = styleVariants({
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
});

export type FlexDirectionVariant = keyof typeof flexDirectionVariant;
