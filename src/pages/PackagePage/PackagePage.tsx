import ItemsList from '../../components/ItemsList/ItemsList';
import './PackagePage.css';
import Tag, { tagTypes } from '../../components/Tag/Tag';
import { order1AfterML } from '../../utils/orderExamples';
import { packNames } from '../../utils/constants';
import { getItemsQuantity, infoTagDeclension } from '../../utils/utils';

export default function PackagePage() {
  return (
    <main id='package-list-page' className='package-list-page'>
      <div className='package-list-page__text'>
        <div className='package-list-page__pack-info'>
          <h1 className='package-list-page__title'>Выберите и отсканируйте упаковку</h1>
          <div className='package-list-page__tags-container'>
            {order1AfterML.packages[2].recommendedPacks.map(packName => {
              const getTagType = packNames.box.includes(packName)
                ? tagTypes.box
                : packNames.bag.includes(packName)
                ? tagTypes.bag
                : tagTypes.another;

              return <Tag type={getTagType} value={packName} />;
            })}
          </div>
        </div>
        <div className='package-list-page__info'>
          <p className='package-list-page__cell'>Посылка 1</p>
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
      <ItemsList itemsPackage={order1AfterML.packages[2].items} hasAdditionalTags={false} />
    </main>
  );
}
