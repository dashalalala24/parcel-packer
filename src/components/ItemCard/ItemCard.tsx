import { FC } from 'react';
import './ItemCard.css';
import ItemImage from '../ItemImage/ItemImage';
import { IItem } from '../../utils/orderExamples';
import Tag, { tagTypes } from '../Tag/Tag';
import Counter from '../Counter/Counter';
import Checkbox from '../Checkbox/Checkbox';

interface IItemCard {
  item: IItem;
  toDelete?: boolean;
  hasCounter?: boolean;
}

const ItemCard: FC<IItemCard> = ({ item, toDelete = false, hasCounter = true }) => {
  const additionalTags = item?.cancel ? (
    <Tag type={tagTypes.cancel} />
  ) : item?.IMEI_required ? (
    <Tag type={tagTypes.IMEI} />
  ) : item?.qrCode_required ? (
    <Tag type={tagTypes.qrCode} />
  ) : null;

  return (
    <div className='item-card'>
      <ItemImage itemImg={item?.pic} itemName={item?.name} />
      <div className='item-card__main-info'>
        <p className='item-card__name'>{item?.name}</p>
        <div className='item-card__tags'>
          <Tag type={tagTypes.barcode} value={item?.barcode} />
          {hasCounter ? additionalTags : null}
        </div>
      </div>
      {hasCounter ? (
        <div className='item-card__actions'>
          <Counter itemsTotal={item?.quantity} itemsScanned={0} />
          {toDelete ? <Checkbox /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default ItemCard;
