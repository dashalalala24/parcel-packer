import Storybook from '../StorybookForThePoor/Storybook';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar, { navbarStatuses } from '../../components/Navbar/Navbar';
import './AppPage.css';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import OrderListPage from '../OrderListPage/OrderListPage';
import InputPopup, { InputPopupTypes } from '../../components/InputPopup/InputPopup';
import Preloader from '../../components/Preloader/Preloader';
import ErrorPage from '../ErrorPage/ErrorPage';
import useRButtonsState from '../../utils/hooks/useButtonsState';
import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import IconImages from '../../components/Icon/types';
import useVisibility from '../../utils/hooks/useVisibility';
import PackagesListPage from '../PackagesListPage/PackagesListPage';
import { order1AfterML } from '../../utils/orderExamples';
import PackagePage from '../PackagePage/PackagePage';


function Layout() {
  const { LButtonState, RButtonState } = useRButtonsState();
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
        // style={{ display: 'flex', flexGrow: 1, height: 'calc(100vh - 256px)', overflow: 'auto' }}
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
          // onOpenKeyboard={handleOpenKeyboard}
          // isKeyboardOpened={isKeyboardOpened}
        />
        <Footer />
      </div>
    </div>
  );
}

function DevNavigation() {
  const location = useLocation();
  return (
    <div
      style={{
        padding: '140px 0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link style={{ font: 'var(--font-m)' }} to={'/storybook'}>
        storybook
      </Link>
      <Link
        style={{ font: 'var(--font-m)' }}
        to={'/modal'}
        state={{ backgroundLocation: location }}
      >
        modal
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/start'}>
        start
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/order-list'}>
        order list
      </Link>
      <br />{' '}
      <Link style={{ font: 'var(--font-m)' }} to={'/packages-list'}>
        packages list
      </Link>
      <br />{' '}
      <Link style={{ font: 'var(--font-m)' }} to={'/packageID-package-list'}>
        package list
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/letters-popup'}>
        letters-popup
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/numbers-popup'}>
        numbers-popup
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/13423'}>
        nomatch
      </Link>
    </div>
  );
}

export const AppPage = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className='Page'>
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<DevNavigation />} />
          <Route path='/start' element={<StartPage />} />
          <Route path='/order-list' element={<OrderListPage />} />
          <Route path='/packages-list' element={<PackagesListPage />} />
          <Route path='/packageID-package-list' element={<PackagePage />} />
          <Route path='/storybook' element={<Storybook />} />
          <Route path='/letters-popup' element={<InputPopup type={InputPopupTypes.letters} />} />
          <Route path='/numbers-popup' element={<InputPopup type={InputPopupTypes.numbers} />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path='/modal' element={<Preloader />} />
      </Routes>
    </div>
  );
};

export default AppPage;
