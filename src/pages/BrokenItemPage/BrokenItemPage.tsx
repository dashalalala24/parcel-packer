import { useSelector } from 'react-redux';
import ItemsList from '../../components/ItemsList/ItemsList';
// import { order1, order2 } from '../../utils/utils';

import './BrokenItemPage.css';
import { selectOrder } from '../../services/redux/slices/order/order';
// import { selectOrderItems } from '../../services/redux/slices/order/order';

export default function BrokenItemPage() {
  const { order } = useSelector(selectOrder);

  return (
    <main id='broken-item-page' className='broken-item-page'>
      <h1 className='broken-item-page__title'>Отсканируйте бракованные товары</h1>
      <ItemsList itemsPackage={order.items} />
    </main>
  );
}
