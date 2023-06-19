import ItemsList from '../../components/ItemsList/ItemsList';
import { order1, order2 } from '../../utils/orderExamples';

import './BrokenItemPage.css';

export default function BrokenItemPage() {
  return (
    <main id='broken-item-page' className='broken-item-page'>
      <h1 className='broken-item-page__title'>Отсканируйте бракованные товары</h1>
      <ItemsList itemsPackage={order2} />
    </main>
  );
}
