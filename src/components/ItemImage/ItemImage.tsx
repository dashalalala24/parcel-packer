import { FC } from 'react';
import './ItemImage.css';

interface IItemImage {
  itemImg: string;
  itemName: string;
  itemsNumber?: number;
}

const ItemImage: FC<IItemImage> = ({ itemImg, itemName, itemsNumber }) => {
  return (
    <div className='item-image'>
      <img
        className='item-image__pic'
        alt={itemName}
        src={itemImg}
      />
      {itemsNumber ? <span className='item-image__label'>{itemsNumber}</span> : null}
    </div>
  );
};

export default ItemImage;
