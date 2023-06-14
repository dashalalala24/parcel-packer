import { CSSProperties, FC, MouseEventHandler } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import IconImages from '../Icon/types';

export enum navbarStatuses {
  default = 'default',
  success = 'success',
  error = 'error',
  anomaly = 'anomaly',
}

const navbarStyle = (status: navbarStatuses): CSSProperties => ({
  backgroundColor:
    status === navbarStatuses.success
      ? 'var(--green-color)'
      : status === navbarStatuses.error
      ? 'var(--red-color)'
      : status === navbarStatuses.anomaly
      ? 'var(--orange-color)'
      : 'var(--white-color)',
});

interface INavbar {
  status: navbarStatuses;
  // onOpenKeyboard: MouseEventHandler<HTMLButtonElement> | any;
  // isKeyboardOpened: boolean;
}
const Navbar: FC<INavbar> = ({
  status,
  //  onOpenKeyboard, isKeyboardOpened
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath === '/start' ? null : (
    <nav className='navbar' style={navbarStyle(status)}>
      <Button
        // onClick={isKeyboardOpened ? onOpenKeyboard : navigate(-1)}
        onClick={() => {
          navigate(-1);
        }}
        color={status === 'default' ? ButtonColors.black : ButtonColors.white}
        size={ButtonSizes.m}
        text='Назад'
      />
      {/* {isKeyboardOpened ? null : ( */}
      <Button
        // onClick={onOpenKeyboard}
        size={ButtonSizes.s}
        color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
        text='Ввести с клавиатуры'
        icon={IconImages.keyboard}
      />
      {/* )} */}
      {/* {isKeyboardOpened ? null : ( */}
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        size={ButtonSizes.xs}
        color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
        text='Изменить состав'
        icon={IconImages.edit}
      />
      {/* )} */}
    </nav>
  );
};

export default Navbar;
