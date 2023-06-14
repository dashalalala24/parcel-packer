import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import './StartPage.css';

export default function StartPage() {
  return (
    <main id='start-page' className='start-page'>
      <div className='start-page__logo-container'>
        <Icon imgName={IconImages.yaLogo} width={280} />
        <h1 className='start-page__title'>Склад</h1>
      </div>
      <Link className='start-page__link' to='/package-list'>
        <Button size={ButtonSizes.xl} color={ButtonColors.yellow} text={'Начать'} />
      </Link>
    </main>
  );
}
