import React from "react";

type Props = { src: string } & React.ImgHTMLAttributes<HTMLImageElement>;

/** SVG URL을 이미지로 렌더링 (로고 등). className/스타일로 크기 조절. 인라인 크기 없이 전달된 className이 적용되도록 함. */
export const SvgIcon: React.FC<Props> = ({ src, alt = "", style, ...props }) => (
  <img src={src} alt={alt} style={style} {...props} />
);
