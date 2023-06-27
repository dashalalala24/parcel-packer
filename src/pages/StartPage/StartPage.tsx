import { useEffect } from 'react';
import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import { closeNotification } from '../../services/redux/slices/notification/notification';
import { resetScannedData } from '../../services/redux/slices/scannedData/scannedData';
import './StartPage.css';
import { useAppDispatch } from '../../utils/hooks/redux';

export default function StartPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(closeNotification());
    dispatch(resetScannedData());
  }, []);

  return (
    <main id='start-page' className='start-page'>
      <div className='start-page__logo-container'>
        <Icon imgName={IconImages.yaLogo} width={'14.5vw'} />
        <h1 className='start-page__title'>Склад</h1>
      </div>
    </main>
  );
}
