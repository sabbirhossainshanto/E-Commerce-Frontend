import { SVGProps } from "react";
export * from "./global";
export * from "./user";
export * from "./category";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
