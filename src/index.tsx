import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import StartPage from './pages/StartPage/StartPage';
import OrderListPage from './pages/OrderListPage/OrderListPage';
import PackagesListPage from './pages/PackagesListPage/PackagesListPage';
import PackagePage from './pages/PackagePage/PackagePage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import ProblemPage from './pages/ProblemPage/ProblemPage';
import Storybook from './pages/StorybookForThePoor/Storybook';
import EditItemsListPage from './pages/EditItemsListPage/EditItemsListPage';
import InputPopup, { InputPopupTypes } from './components/InputPopup/InputPopup';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Preloader from './components/Preloader/Preloader';
import BrokenItemPage from './pages/BrokenItemPage/BrokenItemPage';
import ContainerPage from './pages/ContainerPage/ContainerPage';
import ScanBadgePage from './pages/ScanBadgePage/ScanBadgePage';

const Root: FC = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className='page'>
      <Routes location={state?.backgroundLocation || location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path='/order-list' element={<OrderListPage />} />
          <Route path='/packages-list' element={<PackagesListPage />} />
          <Route path='/packageID-package-list' element={<PackagePage />} />
          <Route path='/done' element={<SuccessPage />} />
          <Route path='/problem' element={<ProblemPage />} />
          <Route path='/edit-itemslist' element={<EditItemsListPage />} />
          <Route path='/scan-badge' element={<ScanBadgePage />} />
          <Route path='/broken-items' element={<BrokenItemPage />} />
          <Route path='/container' element={<ContainerPage />} />
          <Route path='/storybook' element={<Storybook />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path='/loading' element={<Preloader />} />
        <Route path='/keyboard/letters' element={<InputPopup type={InputPopupTypes.letters} />} />
        <Route path='/keyboard/digits' element={<InputPopup type={InputPopupTypes.numbers} />} />
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Root />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
