import { Link } from 'react-router-dom';

import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import ItemsList from '../../components/ItemsList/ItemsList';
import { package1, package2 } from '../../utils/orderExamples';

import './PackageListPage.css';
import IconImages from '../../components/Icon/types';
import Tag, { tagTypes } from '../../components/Tag/Tag';

export default function PackageListPage() {
  return (
    <main id='package-list-page' className='package-list-page'>
      <Link className='package-list-page__link' to='/help'>
        <Button size={ButtonSizes.xl} color={ButtonColors.beige} text={'Есть проблема'} />
      </Link>
      <div className='package-list-page__text'>
        <h1 className='package-list-page__title'>Сканируйте товары</h1>
        <div className='package-list-page__info'>
          <p className='package-list-page__cell'>Ячейка B-09</p>
          <ul className='package-list-page__tags'>
            <li>
              <Tag type={tagTypes.info} value={`${package2.length} товаров`} />
            </li>
            <li>
              <Tag type={tagTypes.info} value={'Перевозчик'} />
            </li>
          </ul>
        </div>
      </div>
      <ItemsList itemsPackage={package2} />
      {/* {ItemsScanned === package2.length ? ( */}
      <Link className='package-list-page__link' to='/'>
        <Button
          size={ButtonSizes.xl}
          color={ButtonColors.yellow}
          text={'Готово'}
          icon={IconImages.qrCodeDone}
        />
      </Link>
      {/* ) : null} */}
    </main>
  );
}
