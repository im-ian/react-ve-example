import { HTMLAttributes } from "react";
import { className } from "./Button.css";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return <button className={className} {...props} />;
}
