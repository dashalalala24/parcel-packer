import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import './ErrorPage.css';

export default function ErrorPage() {
  return (
    <main className='error-page' id='error-page'>
      <Icon imgName={IconImages.errorImage} width={'33.8vw'} height={'11.1vw'} />
      <span className='error-page__status'>404</span>
      <h1 className='error-page__message'>Страница не найдена</h1>
    </main>
  );
}
