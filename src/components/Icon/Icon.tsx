import { FC, CSSProperties } from "react";
import "./Icon.css";
import IconImages from "./types";

interface IIconProps {
  imgName: IconImages;
  color?: "black" | "white";
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const Icon: FC<IIconProps> = ({
  imgName,
  width = 20,
  height = width,
  color = "black",
  style,
}) => {
  const iconStyle: CSSProperties = {
    backgroundImage: `url(${require(`./images/${imgName}.svg`)})`,
    width,
    height,
    filter: color === "white" ? "invert(100%)" : "initial",
    ...style,
  };

  return <div className="icon" style={iconStyle}></div>;
};

export default Icon;
