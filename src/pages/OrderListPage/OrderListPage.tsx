import { useSelector } from 'react-redux';

import ItemsList from '../../components/ItemsList/ItemsList';
import Tag, { tagTypes } from '../../components/Tag/Tag';

import './OrderListPage.css';
import { getTotalItemsQuantity, infoTagDeclension } from '../../utils/utils';
import { selectOrder } from '../../services/redux/slices/order/order';
import { IItemOfOrder } from '../../utils/utils';

export default function OrderListPage() {
  const { order } = useSelector(selectOrder);

  return (
    <main id='order-list-page' className='order-list-page'>
      <div className='order-list-page__text'>
        <h1 className='order-list-page__title'>Сканируйте товары</h1>
        <div className='order-list-page__info'>
          <p className='order-list-page__cell'>Ячейка B-09</p>
          <ul className='order-list-page__tags'>
            <li>
              <Tag
                type={tagTypes.info}
                value={`${getTotalItemsQuantity(order.items)} ${infoTagDeclension(
                  order.items.length
                )}`}
              />
            </li>
            <li>
              <Tag type={tagTypes.info} value={'Почта России'} />
            </li>
          </ul>
        </div>
      </div>
      <ItemsList itemsPackage={order.items} />
    </main>
  );
}
