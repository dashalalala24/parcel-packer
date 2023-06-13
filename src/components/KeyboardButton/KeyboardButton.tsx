import { FC, MouseEventHandler } from 'react';
import './KeyboardButton.css';
import IconImages from '../Icon/types';
import Icon from '../Icon/Icon';

export enum KeyboardButtonColors {
  white = 'var(--white-color)',
  beige = 'var(--beige-color)',
  yellow = 'var(--yellow-color)',
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
}

const KeyboardButton: FC<IKeyboardButton> = ({
  sign,
  icon,
  width,
  color,
  onKeyboardButtonClick,
}) => {
  return (
    <button
      type='button'
      onClick={onKeyboardButtonClick}
      className='keyboard-button'
      style={{
        backgroundColor: color,
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
