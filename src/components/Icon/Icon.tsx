import { FC } from "react";
import "./Icon.css";

interface IIconProps {
  imgName: string;
  width: number;
  height?: number;
}

const Icon: FC<IIconProps> = ({ imgName, width, height = width }) => {
  const iconStyle: React.CSSProperties = {
    backgroundImage: `url(${require(`./images/${imgName}.svg`)})`,
    width,
    height,
  };

  return <div className="icon" style={iconStyle}></div>;
};

export default Icon;
