import { FC } from 'react';
import './Preloader.css';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';

const Preloader: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const container = document.getElementById('react-modals');

  return container
    ? ReactDOM.createPortal(
        <div className='preloader preloader_opened'>
          <div className='preloader__img-container'>
            <div className='preloader__img'>
              <div className='preloader__img-animation'></div>
            </div>
          </div>
          <h2 className='preloader__title'>Пожалуйста, подождите</h2>
          <p className='preloader__subtitle'>
            {currentPath === '/product-list'
              ? 'Идет формирование посылок'
              : 'Идет переформирование посылок'}
          </p>
        </div>,
        container
      )
    : null;
};

export default Preloader;
