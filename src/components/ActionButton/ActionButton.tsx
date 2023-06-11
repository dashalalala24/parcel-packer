import Icon from "../Icon/Icon";
import { FC, MouseEventHandler } from "react";
import IconImages from "../Icon/types";
import "./ActionButton.css";

/** Варианты формы кнопки */
export enum ActionButtonBorderRadius {
  "square" = 20,
  "circle" = 48,
}

interface IActionButtonProps {
  icon: IconImages;
  onClick: MouseEventHandler<HTMLButtonElement>;
  radius?: ActionButtonBorderRadius;
}

/** Кнопка с иконкой без текста */
const ActionButton: FC<IActionButtonProps> = ({
  icon,
  onClick,
  radius = ActionButtonBorderRadius.square,
}) => {
  const iconElement = <Icon imgName={icon} width={30} />;

  return (
    <button
      type={"button"}
      onClick={onClick}
      className="actionButton"
      style={{ borderRadius: radius }}
    >
      {iconElement}
    </button>
  );
};

export default ActionButton;
