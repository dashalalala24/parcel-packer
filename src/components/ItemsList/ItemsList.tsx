import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import { IItem } from '../../utils/orderExamples';
import './ItemsList.css';

interface IItemsList {
  itemsPackage: IItem[];
}

const ItemsList: FC<IItemsList> = ({ itemsPackage }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className='items-list'>
      {itemsPackage.map((item: IItem) => {
        return (
          <li className='items-list__item'>
            <ItemCard
              key={item.barcode}
              item={item}
              toDelete={currentPath === '/edit-itemslist' ? true : false}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
