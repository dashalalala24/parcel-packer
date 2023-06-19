import { FC } from 'react';
import useVisibility from '../../utils/hooks/useVisibility';
import useButtonsState from '../../utils/hooks/useButtonsState';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import IconImages from '../Icon/types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';
import Notification from '../Notification/Notification';

export const Layout: FC = () => {
  const { LButtonState, RButtonState } = useButtonsState();
  const { isLButtonVisible, isRButtonVisible } = useVisibility();

  return (
    <div className='layout'>
      <Header />

      <div className='layout__main'>
        <Button
          color={ButtonColors.beige}
          size={ButtonSizes.xl}
          text='Есть проблема'
          onClick={LButtonState?.callback}
          visible={isLButtonVisible}
        />
        <Outlet />
        <Button
          color={ButtonColors.yellow}
          size={ButtonSizes.xl}
          text={RButtonState?.text}
          icon={RButtonState?.isQR ? IconImages.qrCodeDone : undefined}
          onClick={RButtonState?.callback}
          visible={isRButtonVisible}
        />
      </div>

      <div className='layout__footer-container'>
        <Navbar />
        <Footer />
      </div>
      <Notification />
    </div>
  );
};
