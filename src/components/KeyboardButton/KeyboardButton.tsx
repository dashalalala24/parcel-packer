import { FC, MouseEventHandler } from 'react';
import './KeyboardButton.css';
import IconImages from '../Icon/types';
import Icon from '../Icon/Icon';

export enum KeyboardButtonColors {
  white = 'white',
  beige = 'beige',
  yellow = 'yellow',
}
export enum KeyboardButtonWidths {
  numberWidth = 184,
  letterWidth = 96,
  letterActionWidth = 150,
}
export enum KeyboardButtonIcons {
  delete = IconImages.keyboardDelete,
  enter = IconImages.arrow,
}

interface IKeyboardButton {
  sign?: string;
  icon?: KeyboardButtonIcons;
  width: KeyboardButtonWidths;
  color: KeyboardButtonColors;
  onKeyboardButtonClick?: MouseEventHandler<HTMLButtonElement>;
  actionSubmit?: boolean;
}

const KeyboardButton: FC<IKeyboardButton> = ({
  sign,
  icon,
  width,
  color,
  onKeyboardButtonClick,
  actionSubmit,
}) => {
  const keyboardButtonClassname = `keyboard-button ${
    color === KeyboardButtonColors.beige
      ? 'keyboard-button_color_beige'
      : color === KeyboardButtonColors.yellow
      ? 'keyboard-button_color_yellow'
      : ''
  }`;

  return (
    <button
      type={actionSubmit ? 'submit' : 'button'}
      onClick={onKeyboardButtonClick}
      className={keyboardButtonClassname}
      style={{
        width: width,
        height: width === KeyboardButtonWidths.numberWidth ? 94 : 92,
        borderRadius:
          width === KeyboardButtonWidths.numberWidth ? 'var(--border-radius-s)' : undefined,
      }}
    >
      {icon === KeyboardButtonIcons.delete ? (
        <Icon imgName={IconImages.keyboardDelete} width={40} />
      ) : icon === KeyboardButtonIcons.enter ? (
        <Icon imgName={IconImages.arrow} width={40} />
      ) : sign ? (
        sign
      ) : null}
    </button>
  );
};

export default KeyboardButton;
