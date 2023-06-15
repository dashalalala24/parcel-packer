import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import './ErrorPage.css';

export default function ErrorPage() {
  return (
    <main className='error-page' id='error-page'>
      <Icon imgName={IconImages.errorImage} width={650} height={212} />
      <span className='error-page__status'>404</span>
      <h1 className='error-page__message'>Страница не найдена</h1>
    </main>
  );
}
