import React from "react";
import chromaSvg from "./chroma-icon.svg";
import cursorSvg from "./cursor.svg";
import fastapiSvg from "./logo-teal-vector.svg";
import mybatisSvg from "./mybatis.svg";
import zustandSvg from "./zustand-mascot.svg";
import { SvgIcon } from "./SvgIcon";

type IconProps = React.SVGProps<SVGSVGElement>;

const withSvg = (src: string) => (props: IconProps) => (
  <SvgIcon src={src} className={props.className} style={props.style as React.CSSProperties} />
);

export const ChromaDBIcon = withSvg(chromaSvg);
export const CursorIcon = withSvg(cursorSvg);
export const FastAPIIcon = withSvg(fastapiSvg);
export const MyBatisIcon = withSvg(mybatisSvg);
export const ZustandIcon = withSvg(zustandSvg);
