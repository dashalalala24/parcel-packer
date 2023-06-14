import Storybook from '../StorybookForThePoor/Storybook';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar, { navbarStatuses } from '../../components/Navbar/Navbar';
import './AppPage.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage/Error-page';
import StartPage from '../StartPage/StartPage';
import PackageListPage from '../PackageListPage/PackageListPage';
import InputPopup, { InputPopupTypes } from '../../components/InputPopup/InputPopup';
import Preloader from '../../components/Preloader/Preloader';

function Layout() {
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
        <Outlet />
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
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/start'}>
        start
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/package-list'}>
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
      <Link style={{ font: 'var(--font-m)' }} to={'/preloader'}>
        preloader
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/13423'}>
        nomatch
      </Link>
    </div>
  );
}

export const AppPage = () => {
  return (
    <div className='Page'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DevNavigation />} />
          <Route path='/start' element={<StartPage />} />
          <Route path='/package-list' element={<PackageListPage />} />
          <Route path='/storybook' element={<Storybook />} />
          <Route path='/preloader' element={<Preloader />} />
          <Route path='/letters-popup' element={<InputPopup type={InputPopupTypes.letters} />} />
          <Route path='/numbers-popup' element={<InputPopup type={InputPopupTypes.numbers} />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppPage;
