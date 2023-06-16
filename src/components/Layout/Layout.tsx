import { FC } from 'react';
import useVisibility from '../../utils/hooks/useVisibility';
import useButtonsState from '../../utils/hooks/useButtonsState';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import IconImages from '../Icon/types';
import Navbar, { navbarStatuses } from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export const Layout: FC = () => {
  const { LButtonState, RButtonState } = useButtonsState();
  const { isLButtonVisible, isRButtonVisible } = useVisibility();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <Header />
      </div>
      <div
        style={{ display: 'flex', flexGrow: 1, overflow: 'auto' }}
      >
        {isLButtonVisible && (
          <Button
            color={ButtonColors.beige}
            size={ButtonSizes.xl}
            text='Есть проблема'
            onClick={LButtonState?.callback}
          />
        )}

        <Outlet />

        {isRButtonVisible && (
          <Button
            color={ButtonColors.yellow}
            size={ButtonSizes.xl}
            text={RButtonState?.text}
            icon={RButtonState?.isQR ? IconImages.qrCodeDone : undefined}
            onClick={RButtonState?.callback}
          />
        )}
      </div>
      <div style={{ flexShrink: 0 }}>
        <Navbar
          status={navbarStatuses.default}
        />
        <Footer />
      </div>
    </div>
  );
};
