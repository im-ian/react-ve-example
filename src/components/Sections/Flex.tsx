import { HTMLAttributes, PropsWithChildren } from "react";

import {
  flexDirectionVariant,
  FlexDirectionVariant,
  flexClassName,
  flexItemClassName,
} from "./Flex.css";
import { classNames } from "../../utils/class";

type DivProps = HTMLAttributes<HTMLDivElement>;
type FlexProps = PropsWithChildren<DivProps>;

function Flex({
  className,
  direction = "row",
  ...props
}: FlexProps & {
  direction?: FlexDirectionVariant;
}) {
  return (
    <div
      className={classNames([
        flexClassName,
        flexDirectionVariant[direction],
        className,
      ])}
      {...props}
    />
  );
}

function FlexItem({ className, ...props }: FlexProps) {
  return (
    <div className={classNames([flexItemClassName, className])} {...props} />
  );
}

export default Object.assign(Flex, {
  Item: FlexItem,
});
