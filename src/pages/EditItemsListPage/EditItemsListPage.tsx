import { useSelector } from 'react-redux';
import ItemsList from '../../components/ItemsList/ItemsList';
import Tag, { tagTypes } from '../../components/Tag/Tag';
// import { order1AfterML } from '../../utils/utils';
// import { getItemsQuantity, infoTagDeclension } from '../../utils/utils';

import './EditItemsListPage.css';
import { selectOrder } from '../../services/redux/slices/order/order';
import { getTotalItemsQuantity, infoTagDeclension } from '../../utils/utils';

export default function EditItemsListPage() {
  const { order } = useSelector(selectOrder);

  return (
    <main id='edit-itemslist-page' className='edit-itemslist-page'>
      <div className='edit-itemslist-page__text'>
        <h1 className='package-list-page__title'>Выберите товар, который нужно убрать</h1>
        <div className='package-list-page__info'>
          <p className='package-list-page__cell'>Посылка 1</p>
          <ul className='package-list-page__tags'>
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
      <ItemsList itemsPackage={order.items} hasAdditionalTags={false} />
    </main>
  );
}
