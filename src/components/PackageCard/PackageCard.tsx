import { FC } from 'react';
import './PackageCard.css';
import ItemImage from '../ItemImage/ItemImage';
import { IItem } from '../../utils/orderExamples';

interface IPackageCard {
  items: IItem[];
}

const PackageCard: FC<IPackageCard> = ({ items }) => {
  return (
    <div className='package-card'>
      {items.length < 5 ? (
        items.map(item => (
          <ItemImage
            key={item.id}
            itemImg={item.pic}
            itemName={item.name}
            itemQuantity={item.quantity}
          />
        ))
      ) : (
        <>
          {items.slice(0, 3).map(item => (
            <ItemImage
              key={item.id}
              itemImg={item.pic}
              itemName={item.name}
              itemQuantity={item.quantity}
            />
          ))}
          <div className='package-card__left'>+{items.length - 3}</div>
        </>
      )}
    </div>
  );
};

export default PackageCard;
