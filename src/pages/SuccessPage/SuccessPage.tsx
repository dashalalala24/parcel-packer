import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import './SuccessPage.css';

export default function SuccessPage() {
  return (
    <main id='success-page' className='success-page'>
      <Icon imgName={IconImages.done} width={635} height={276} />
      <h1 className='success-page__title'>Поставьте упакованные товары на конвейер</h1>
    </main>
  );
}
