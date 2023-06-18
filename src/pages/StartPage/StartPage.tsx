import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import './StartPage.css';

export default function StartPage() {
  return (
    <main id='start-page' className='start-page'>
      <div className='start-page__logo-container'>
        <Icon imgName={IconImages.yaLogo} width={'14.5vw'} />
        <h1 className='start-page__title'>Склад</h1>
      </div>
    </main>
  );
}
