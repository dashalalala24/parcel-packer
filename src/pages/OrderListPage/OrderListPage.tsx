// import { Link } from 'react-router-dom';

// import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import ItemsList from '../../components/ItemsList/ItemsList';
import { order1, order2 } from '../../utils/orderExamples';

import './OrderListPage.css';
// import IconImages from '../../components/Icon/types';
import Tag, { tagTypes } from '../../components/Tag/Tag';

export default function OrderListPage() {
  return (
    <main id='order-list-page' className='order-list-page'>
      {/* <Link className='order-list-page__link' to='/help'>
        <Button size={ButtonSizes.xl} color={ButtonColors.beige} text={'Есть проблема'} />
      </Link> */}
      <div className='order-list-page__text'>
        <h1 className='order-list-page__title'>Сканируйте товары</h1>
        <div className='order-list-page__info'>
          <p className='order-list-page__cell'>Ячейка B-09</p>
          <ul className='order-list-page__tags'>
            <li>
              <Tag type={tagTypes.info} value={`${order2.length} товаров`} />
            </li>
            <li>
              <Tag type={tagTypes.info} value={'Перевозчик'} />
            </li>
          </ul>
        </div>
      </div>
      <ItemsList itemsPackage={order2} />
      {/* {ItemsScanned === order2.length ? ( */}
      {/* <Link className='order-list-page__link' to='/'>
        <Button
          size={ButtonSizes.xl}
          color={ButtonColors.yellow}
          text={'Готово'}
          icon={IconImages.qrCodeDone}
        />
      </Link> */}
      {/* ) : null} */}
    </main>
  );
}
