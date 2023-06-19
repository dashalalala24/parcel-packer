import { FC } from 'react';
import './ItemImage.css';

interface IItemImage {
  itemImg: string;
  itemName: string;
  itemQuantity?: number;
}

const ItemImage: FC<IItemImage> = ({ itemImg, itemName, itemQuantity = 1 }) => {
  return (
    <div className='item-image'>
      <img className='item-image__pic' alt={itemName} src={itemImg} />
      {itemQuantity > 1 ? <span className='item-image__label'>{itemQuantity}</span> : null}
    </div>
  );
};

export default ItemImage;
