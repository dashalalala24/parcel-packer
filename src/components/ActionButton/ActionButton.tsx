import Icon from "../Icon/Icon";
import { FC, MouseEventHandler } from "react";
import IconImages from "../Icon/types";
import "./ActionButton.css";

/** Варианты формы кнопки */
export enum ActionButtonBorderRadius {
  square = 20,
  circle = 48,
}

export enum ActionButtonBackground {
  beige = "--beige-color",
  transparent = 'transparent'
}

interface IActionButtonProps {
  icon: IconImages;
  onClick: MouseEventHandler<HTMLButtonElement>;
  borderRadius?: ActionButtonBorderRadius;
  backgroundColor?: ActionButtonBackground;
  iconColor?: "white" | "black"
}

/** Кнопка с иконкой без текста */
const ActionButton: FC<IActionButtonProps> = ({
  icon,
  onClick,
  borderRadius = ActionButtonBorderRadius.square,
  backgroundColor = ActionButtonBackground.transparent,
  iconColor = "black"
}) => {
  const iconElement = <Icon imgName={icon} width={30} color={iconColor} />;

  return (
    <button
      type={"button"}
      onClick={onClick}
      className="actionButton"
      style={{ borderRadius, backgroundColor }}

    >
      {iconElement}
    </button>
  );
};

export default ActionButton;
