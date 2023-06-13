import { CSSProperties, FC } from 'react';
import { useLocation } from 'react-router-dom';
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
}
const Navbar: FC<INavbar> = ({ status }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath === '/start' ? null : (
    <nav className='navbar' style={navbarStyle(status)}>
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        color={status === 'default' ? ButtonColors.black : ButtonColors.white}
        size={ButtonSizes.m}
        text='Назад'
      />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        size={ButtonSizes.s}
        color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
        text='Ввести с клавиатуры'
        icon={IconImages.keyboard}
      />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        size={ButtonSizes.xs}
        color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
        text='Изменить состав'
        icon={IconImages.edit}
      />
    </nav>
  );
};

export default Navbar;
