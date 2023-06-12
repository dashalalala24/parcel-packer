import React, { FC, ReactElement, ReactNode, useState } from 'react';
import './ItemCard.css';
import ItemImage from '../ItemImage/ItemImage';
import { IItem } from '../../utils/orderExamples';
import Tag from '../Tag/Tag';
import Counter from '../Counter/Counter';
import IconImages from '../Icon/types';
import Checkbox from '../Checkbox/Checkbox';
import Icon from '../Icon/Icon';
// import { JsxElement } from 'typescript';

// interface IJsxElement {
//   type: string;
//   // key: number;
//   children: ReactNode;
// }

// const barcodes = () : FC<IJsxElement> => {
//   for (let i; i < item.quantity; i++) {
//     return (<Tag key={item.id} type={item.barcode} />);
//   }
// };

interface IItemCard {
  item: IItem;
  toDelete?: boolean;
}

const ItemCard: FC<IItemCard> = ({ item, toDelete = false }) => {
  const additionalTag = item.IMEI_required ? (
    <Tag type={'IMEI'} />
  ) : item.chestnyy_znak_required ? (
    <Tag type={'IMEI'} />
  ) : item.canceled ? (
    <Tag type={'cancel'} />
  ) : null;

  // открытие списка штрихкодов
  const [isBarcodeListOpen, setBarcodeListOpen] = useState(false);

  function onListOpen() {
    setBarcodeListOpen(!isBarcodeListOpen);
  }

  function fewBarcodes(item: IItem): ReactNode | undefined {
    for (let i = 0; i < item.quantity; i++) {
      return (
        <div className='item-card__barcode-item'>
          <Tag type={item.barcode} />
          <Counter itemsTotal={1} itemsScanned={0} />
        </div>
      );
    }
  }

  return (
    <div className='item-card'>
      <div className='item-card__container'>
        <ItemImage itemImg={item.pic} itemName={item.name} />
        <div className='item-card__main-info'>
          <p className='item-card__name'>{item.name}</p>
          <div className='item-card__tags-container'>
            {item.quantity > 1 ? (
              <div className='item-card__barcode-container'>
                <div className='item-card__barcode-container' onClick={onListOpen}>
                  <p className='item-card__barcode-button'>
                    {isBarcodeListOpen ? 'Свернуть' : 'Развернуть'}
                  </p>
                  <Icon imgName={IconImages.wrapArrow} />
                </div>
              </div>
            ) : (
              <Tag type={item.barcode} />
            )}
            {additionalTag}
          </div>
        </div>
        <div className='item-card__actions-container'>
          <Counter itemsTotal={item.quantity} itemsScanned={0} />
          {toDelete ? <Checkbox /> : null}
        </div>
      </div>
      {item.quantity > 1 ? (
        <div
          className={`item-card__barcodes-list ${
            isBarcodeListOpen ? 'item-card__barcodes-list_opened' : ''
          }`}
        >
          {fewBarcodes(item)}
        </div>
      ) : null}
    </div>
  );
};

export default ItemCard;
