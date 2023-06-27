import { FC, useEffect } from 'react';
import './ItemCard.css';
import ItemImage from '../ItemImage/ItemImage';
import { IItemOfOrder } from '../../utils/utils';
import Tag, { tagTypes } from '../Tag/Tag';
import Counter from '../Counter/Counter';
import Checkbox from '../Checkbox/Checkbox';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../services/redux/slices/order/order';
import { it } from 'node:test';

interface IItemCard {
  item: IItemOfOrder;
  toDelete?: boolean;
  hasCounter?: boolean;
  hasAdditionalTags?: boolean;
}

const ItemCard: FC<IItemCard> = ({
  item,
  toDelete = false,
  hasCounter = true,
  hasAdditionalTags = true,
}) => {
  const { scannedData } = useSelector((state: any) => state.scannedData);

  // const additionalTags = item?.cancel ? (
  //   <Tag type={tagTypes.cancel} />
  // ) : item?.IMEI_required ? (
  //   <Tag type={tagTypes.IMEI} />
  // ) : item?.qrCode_required ? (
  //   <Tag type={tagTypes.qrCode} />
  // ) : null;

  function getItemsScanned(arr: string[]): number {
    let counter = 0;
    arr.map((i: string) => {
      if (i === item.barcode.toString()) {
        return counter++;
      } else {
        return counter;
      }
    });
    return counter;
  }

  return (
    <div className={`item-card ${hasCounter ? '' : 'item-card_size_small'}`}>
      <ItemImage itemImg={item?.pic} itemName={item?.name} />
      <div className='item-card__main-info'>
        <p className='item-card__name'>{item?.name}</p>
        <div className='item-card__tags'>
          <Tag type={tagTypes.barcode} value={item?.barcode} />
          {/* {hasAdditionalTags ? additionalTags : null} */}
        </div>
      </div>
      {hasCounter ? (
        <div className='item-card__actions'>
          <Counter
            itemsTotal={item.count ? item.count : 1}
            itemsScanned={getItemsScanned(scannedData)}
          />
          {toDelete ? <Checkbox /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default ItemCard;
