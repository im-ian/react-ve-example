import { HTMLAttributes, PropsWithChildren } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import {
  flexDirectionVariant,
  FlexDirectionVariant,
  flexClassName,
  flexItemClassName,
  flexItemFlexVar,
  flexItemWidthVar,
  flexGapVar,
} from "./Flex.css";
import { classNames } from "../../utils/class";

type DivProps = HTMLAttributes<HTMLDivElement>;
type BoxProps = PropsWithChildren<DivProps>;

type FlexProps = BoxProps & {
  gap?: string;
  direction?: FlexDirectionVariant;
};

function Flex({ className, gap, direction = "row", ...props }: FlexProps) {
  return (
    <div
      className={classNames([
        flexClassName,
        flexDirectionVariant[direction],
        className,
      ])}
      style={assignInlineVars({
        [flexGapVar]: gap,
      })}
      {...props}
    />
  );
}

type FlexItemProps = BoxProps & {
  flex?: string;
  width?: string;
};

function FlexItem({ className, flex, width, ...props }: FlexItemProps) {
  return (
    <div
      className={classNames([flexItemClassName, className])}
      style={assignInlineVars({
        [flexItemFlexVar]: flex,
        [flexItemWidthVar]: width,
      })}
      {...props}
    />
  );
}

export default Object.assign(Flex, {
  Item: FlexItem,
});
