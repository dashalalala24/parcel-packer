import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import { IItemOfOrder } from '../../utils/utils';
import './ItemsList.css';

interface IItemsList {
  itemsPackage: IItemOfOrder[];
  hasAdditionalTags?: boolean;
}

const ItemsList: FC<IItemsList> = ({ itemsPackage, hasAdditionalTags = true }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className='items-list'>
      {itemsPackage.map((item: IItemOfOrder) => {
        return (
          <li className='items-list__item' key={item.barcode}>
            <ItemCard
              item={item}
              toDelete={currentPath === '/edit-itemslist' ? true : false}
              hasAdditionalTags={hasAdditionalTags}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
