import { CSSProperties, FC, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import IconImages from '../Icon/types';
import useVisibility from '../../utils/hooks/useVisibility';
import { useAppSelector } from '../../utils/hooks/redux';
export enum navbarColors {
  default = 'var(--white-color)',
  success = 'var(--green-color)',
  warning = 'var(--orange-color)',
  error = 'var(--red-color)',
}

type TNnavbarStatus = 'default' | 'success' | 'warning' | 'error';

const navbarStyle = (status: TNnavbarStatus): CSSProperties => ({
  backgroundColor:
    status === 'success'
      ? navbarColors.success
      : status === 'error'
      ? navbarColors.error
      : status === 'warning'
      ? navbarColors.warning
      : navbarColors.default,
});

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { navbarVisibility } = useVisibility();
  const {
    isBackButtonVisible,
    isChangeItemsButtonVisible,
    isManualInputButtonVisible,
    isNavbarVisible,
  } = navbarVisibility;
  const isNotificationVisible = useAppSelector(state => state.notification.isVisible);
  const notificationType = useAppSelector(state => state.notification.type);
  const location = useLocation();
  const currentPath = location.pathname;

  const status: TNnavbarStatus = useMemo(() => {
    return currentPath === '/problem' ||
      currentPath === '/broken-items' ||
      currentPath === '/edit-itemslist' ||
      currentPath === '/scan-badge'
      ? 'warning'
      : !isNotificationVisible || notificationType === 'info'
      ? 'default'
      : notificationType === 'fault' || notificationType === 'systemError'
      ? 'error'
      : notificationType === 'warning'
      ? 'warning'
      : 'success';
  }, [currentPath, isNotificationVisible, notificationType]);

  const onBackButtonClick = () => {
    navigate(-1);
  };

  const onKeyboardButtonClick = () => {
    if (pathname === '/order-list' || pathname === '/broken-items') {
      navigate('/keyboard/digits');
    } else if (pathname.includes('package-list')) {
      navigate('/keyboard/letters');
    }
  };

  const onChangeOrderClick = () => {
    navigate('/edit-itemslist');
  };

  return isNavbarVisible ? (
    <nav className='navbar' style={navbarStyle(status)}>
      <div style={{ justifyContent: 'start' }} className='navbar__button-container'>
        <Button
          onClick={onBackButtonClick}
          color={status === 'default' ? ButtonColors.black : ButtonColors.white}
          size={ButtonSizes.m}
          text='Назад'
          visible={isBackButtonVisible}
        />
      </div>

      <div style={{ justifyContent: 'center' }} className='navbar__button-container'>
        <Button
          size={ButtonSizes.s}
          onClick={onKeyboardButtonClick}
          color={status === 'default' ? ButtonColors.white : ButtonColors.transparent}
          text='Ввести с клавиатуры'
          icon={IconImages.keyboard}
          visible={isManualInputButtonVisible}
        />
      </div>

      <div style={{ justifyContent: 'end' }} className='navbar__button-container'>
        <Button
          onClick={onChangeOrderClick}
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
