import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import './ContainerPage.css';

export default function ContainerPage() {
  return (
    <main id='container-page' className='container-page'>
      <Icon imgName={IconImages.container} width={538} height={423} />
      <h1 className='container-page__title'>Положите бракованные товары в&nbsp;тару</h1>
    </main>
  );
}
