import { CSSProperties, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import IconImages from '../Icon/types';
import useVisibility from '../../utils/hooks/useVisibility';
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
  const navigate = useNavigate();
  const { navbarVisibility } = useVisibility();
  const {
    isBackButtonVisible,
    isChangeItemsButtonVisible,
    isManualInputButtonVisible,
    isNavbarVisible,
  } = navbarVisibility;

  return isNavbarVisible ? (
    <nav className='navbar' style={navbarStyle(status)}>
      <div style={{ justifyContent: 'start' }} className='navbar__button-container'>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          color={status === 'default' ? ButtonColors.black : ButtonColors.white}
          size={ButtonSizes.m}
          text='Назад'
          visible={isBackButtonVisible}
        />
      </div>

      <div style={{ justifyContent: 'center' }} className='navbar__button-container'>
        <Button
          size={ButtonSizes.s}
          color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
          text='Ввести с клавиатуры'
          icon={IconImages.keyboard}
          visible={isManualInputButtonVisible}
        />
      </div>

      <div style={{ justifyContent: 'end' }} className='navbar__button-container'>
        <Button
          onClick={() => {
            console.log('Hello');
          }}
          size={ButtonSizes.xs}
          color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
          text='Изменить состав'
          icon={IconImages.edit}
          visible={isChangeItemsButtonVisible}
        />
      </div>
    </nav>
  ) : null;
};

export default Navbar;
