import { CSSProperties, FC, MouseEventHandler } from 'react';
import './Button.css';
import Icon from '../Icon/Icon';
import { IconImages } from '../Icon/types';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

export enum ButtonColors {
  yellow = 'yellow',
  beige = 'beige',
  black = 'black',
  white = 'white',
  transparent = 'transparent',
}

export enum ButtonSizes {
  xl = 'xl',
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs',
}

export enum ButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

const buttonStyles = (
  size: ButtonSizes,
  visible: boolean,
  color?: ButtonColors
): CSSProperties => ({
  backgroundColor: color ? `var(--${color}-color)` : 'transparent',
  borderRadius:
    size === ButtonSizes.xl ? 'calc(1vw + 1vh)' : size === ButtonSizes.l ? '1.04vw' : size === ButtonSizes.m ? '1.25vw' : '1.25vw',
  font:
    size === ButtonSizes.xl
      ? 'var(--font-button-xl)'
      : size === ButtonSizes.l
      ? 'var(--font-button-l)'
      : size === ButtonSizes.m
      ? 'var(--font-button-m)'
      : size === ButtonSizes.s
      ? 'var(--font-button-s)'
      : 'var(--font-button-xs)',
  minWidth: size === ButtonSizes.xl ? '15.5vw' : size === ButtonSizes.l ? '23.5vw' : '15.4vw',
  height: size === ButtonSizes.xl ? '61.5vh' : size === ButtonSizes.l ? '8.7vh' : '6.8vh',
  flexDirection: size === ButtonSizes.xl ? 'column-reverse' : 'row',
  color: color === 'black' || color === 'transparent' ? 'white' : 'black',
  position: size === ButtonSizes.xl ? 'fixed' : 'static',
  top: size === ButtonSizes.xl ? '19vh' : 'unset',
  right: size === ButtonSizes.xl && color === ButtonColors.yellow ? '1vw' : 'auto',
  left: size === ButtonSizes.xl && color === ButtonColors.beige ? '1vw' : 'auto',
  width: size === ButtonSizes.xl ? '15vw' : undefined,
  display: visible ? undefined : 'none',
  padding:
    size === ButtonSizes.s || size === ButtonSizes.m || size === ButtonSizes.l ? '0 0.9vw' : 0,
});

interface IButtonProps {
  color?: ButtonColors;
  size?: ButtonSizes;
  icon?: IconImages;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonTypes;
  visible?: boolean;
}

const Button: FC<IButtonProps> = ({
  color,
  size = ButtonSizes.m,
  text,
  icon,
  onClick,
  type = ButtonTypes.button,
  visible = true,
}) => {
  const iconElement = icon ? (
    <Icon
      imgName={icon}
      color={color === 'black' || color === 'transparent' ? 'white' : 'black'}
      width={size === ButtonSizes.xl ? '15vh' : icon === 'keyboard' || icon === 'edit' ? '2.5vw' : '1.6vw'}
      style={{ margin: size === ButtonSizes.xl ? '5vh 0 0' : '0 0.6vw 0 0' }}
    />
  ) : null;

  return (
    <button
      type={type}
      onClick={onClick}
      className='button'
      style={buttonStyles(size, visible, color)}
    >
      {iconElement}
      {text}
    </button>
  );
};

export default Button;
