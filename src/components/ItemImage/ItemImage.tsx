import { FC } from 'react';
import './ItemImage.css';

interface IItemImage {
  itemImg: string;
  itemName: string;
  itemQuantity: number;
  deleted?: boolean;
  itemsNumber?: number;
}

const ItemImage: FC<IItemImage> = ({ itemImg, itemName, itemQuantity, deleted = false }) => {
  return (
    <div className='item-image'>
      <img
        className={deleted ? 'item-image__pic item-image__pic_deleted' : 'item-image__pic'}
        alt={itemName}
        src={itemImg}
      />
      {itemQuantity > 1 ? <span className='item-image__label'>{itemQuantity}</span> : null}
    </div>
  );
};

export default ItemImage;
