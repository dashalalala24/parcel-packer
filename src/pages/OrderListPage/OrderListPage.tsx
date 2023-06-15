import ItemsList from '../../components/ItemsList/ItemsList';
import { order1, order2 } from '../../utils/orderExamples';
import Tag, { tagTypes } from '../../components/Tag/Tag';

import './OrderListPage.css';

export default function OrderListPage() {
  return (
    <main id='order-list-page' className='order-list-page'>
      <div className='order-list-page__text'>
        <h1 className='order-list-page__title'>Сканируйте товары</h1>
        <div className='order-list-page__info'>
          <p className='order-list-page__cell'>Ячейка B-09</p>
          <ul className='order-list-page__tags'>
            <li>
              <Tag type={tagTypes.info} value={`${order2.length} товаров`} />
            </li>
            <li>
              <Tag type={tagTypes.info} value={'Почта России'} />
            </li>
          </ul>
        </div>
      </div>
      <ItemsList itemsPackage={order2} />
    </main>
  );
}
