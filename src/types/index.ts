import { SVGProps } from "react";
export * from "./global";
export * from "./user";
export * from "./category";
export * from "./shop";
export * from "./product";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
