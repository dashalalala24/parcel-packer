import { CSSProperties, FC, MouseEventHandler } from 'react';
import './Button.css';
import Icon from '../Icon/Icon';
import { IconImages } from '../Icon/types';

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

const buttonStyles = (size: ButtonSizes, color?: ButtonColors): CSSProperties => ({
  backgroundColor: color ? `var(--${color}-color)` : 'transparent',
  borderRadius:
    size === ButtonSizes.xl ? 24 : size === ButtonSizes.l ? 20 : size === ButtonSizes.m ? 24 : 24,
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
  minWidth: size === ButtonSizes.xl ? 296 : size === ButtonSizes.l ? 453 : 296,
  height: size === ButtonSizes.xl ? 662 : size === ButtonSizes.l ? 94 : 72,
  flexDirection: size === ButtonSizes.xl ? 'column-reverse' : 'row',
  color: color === 'black' || color === 'transparent' ? 'white' : 'black',
});

interface IButtonProps {
  color?: ButtonColors;
  size?: ButtonSizes;
  icon?: IconImages;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonTypes;
}

const Button: FC<IButtonProps> = ({
  color,
  size = ButtonSizes.m,
  text,
  icon,
  onClick,
  type = ButtonTypes.button,
}) => {
  const iconElement = icon ? (
    <Icon
      imgName={icon}
      color={color === 'black' || color === 'transparent' ? 'white' : 'black'}
      width={size === ButtonSizes.xl ? 200 : 32}
      style={{ margin: size === ButtonSizes.xl ? '40px 0 0' : '0 18px 0 0' }}
    />
  ) : null;

  return (
    <button type={type} onClick={onClick} className='button' style={buttonStyles(size, color)}>
      {iconElement}
      {text}
    </button>
  );
};

export default Button;
