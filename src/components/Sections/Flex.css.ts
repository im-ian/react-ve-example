import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const flexGapVar = createVar();

export const flexClassName = style({
  vars: {
    [flexGapVar]: "0",
  },
  gap: flexGapVar,
  display: "flex",
});

export const flexItemFlexVar = createVar();
export const flexItemWidthVar = createVar();

export const flexItemClassName = style({
  vars: {
    [flexItemFlexVar]: "none",
    [flexItemWidthVar]: "auto",
  },
  width: flexItemWidthVar,
  flex: flexItemFlexVar,
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
