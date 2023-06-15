import ItemsList from '../../components/ItemsList/ItemsList';
import Tag, { tagTypes } from '../../components/Tag/Tag';
import { order1AfterML } from '../../utils/orderExamples';
import { packNames } from '../../utils/constants';
import { getItemsQuantity, infoTagDeclension } from '../../utils/utils';

import './EditItemsListPage.css';

export default function EditItemsListPage() {
  return (
    <main id='edit-itemslist-page' className='edit-itemslist-page'>
      <div className='edit-itemslist-page__text'>
        <h1 className='package-list-page__title'>Выберите товар, который нужно убрать</h1>
        <div className='package-list-page__info'>
          <p className='package-list-page__cell'>Ячейка B-09</p>
          <ul className='package-list-page__tags'>
            <li>
              <Tag
                type={tagTypes.info}
                value={`${getItemsQuantity(order1AfterML.packages[2].items)} ${infoTagDeclension(
                  getItemsQuantity(order1AfterML.packages[2].items)
                )}`}
              />
            </li>
            <li>
              <Tag type={tagTypes.info} value={'Почта России'} />
            </li>
          </ul>
        </div>
      </div>
      <ItemsList itemsPackage={order1AfterML.packages[2].items} />
    </main>
  );
}
