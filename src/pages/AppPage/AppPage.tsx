import Storybook from '../StorybookForThePoor/Storybook';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar, { navbarStatuses } from '../../components/Navbar/Navbar';
import './AppPage.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export const AppPage = () => {
  return (
    <div className='Page'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DevNavigation />} />
          <Route path='/storybook' element={<Storybook />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

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

      <div style={{ flexGrow: 1, height: 'calc(100vh - 256px)', overflow: 'auto' }}>
        <Outlet />
      </div>

      <div style={{ flexShrink: 0 }}>
        <Navbar status={navbarStatuses.default} />
        <Footer />
      </div>
    </div>
  );
}

function DevNavigation() {
  return (
    <div>
      <Link to={'/storybook'}>storybook</Link>
      <br />
      <Link to={'/13423'}>nomatch</Link>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}

export default AppPage;
