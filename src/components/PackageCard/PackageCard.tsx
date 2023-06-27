import { FC } from 'react';
import './PackageCard.css';
import ItemImage from '../ItemImage/ItemImage';
import { IItemOfOrder, IItemOfPackage } from '../../utils/utils';

interface IPackageCard {
  items: IItemOfPackage[];
}

const PackageCard: FC<IPackageCard> = ({ items }) => {
  return (
    <div className='package-card'>
      {items.length < 5 ? (
        items.map(item => (
          <ItemImage
            key={item.barcode}
            itemImg={item.pic}
            itemName={item.name}
            itemQuantity={item.count ? item.count : 1}
          />
        ))
      ) : (
        <>
          {items.slice(0, 3).map(item => (
            <ItemImage
              key={item.barcode}
              itemImg={item.pic}
              itemName={item.name}
              itemQuantity={item.count ? item.count : 1}
            />
          ))}
          <div className='package-card__left'>+{items.length - 3}</div>
        </>
      )}
    </div>
  );
};

export default PackageCard;
