import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import { BrowserRouter } from 'react-router-dom';
import AppPage from './pages/AppPage/AppPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppPage />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
