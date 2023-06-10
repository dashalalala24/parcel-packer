import { FC } from 'react';
import Icon from '../Icon/Icon';
import './Tag.css';

interface IPacks {
  box: string[];
  bag: string[];
  other: string[];
}

const packNames: IPacks = {
  box: [
    'YMA',
    'YMC',
    'YME',
    'YMF',
    'YMG',
    'YMH',
    'YMJ',
    'YML',
    'YMN',
    'YMO',
    'YMP',
    'YMQ',
    'YMP',
    'YMR',
    'YMS',
    'YMU',
    'YMV',
    'YMW',
    'YMX',
    'YMY',
  ],
  bag: ['MYA', 'MYB', 'MYC', 'MYD', 'MYE'],
  other: ['KSD', 'NONPACK', 'STRETCH'],
};

const tagsWithIcon: string[] = ['box', 'bag', 'barcode', 'IMEI', 'chestnyy_znak', 'cancel'];

interface ITag {
  type: string | number;
  value?: string;
}

const Tag: FC<ITag> = ({ type, value = type }) => {
  const tagType = (): string => {
    if (typeof type === 'number') {
      return 'barcode';
    } else if (packNames.box.includes(type)) {
      return 'box';
    } else if (packNames.bag.includes(type)) {
      return 'bag';
    } else if (packNames.other.includes(type)) {
      return 'other';
    } else {
      return type;
    }
  };

  const tagText: string | number =
    type === 'cancel'
      ? 'Товар отменён'
      : type === 'IMEI'
      ? 'Сканировать IMEI'
      : type === 'chestnyy_znak'
      ? 'Cканировать марку'
      : type === 'info'
      ? value
      : type;

  const iconName = (): string => {
    return type === 'IMEI' ? 'barcode' : type === 'chestnyy_znak' ? 'qrCode' : tagType();
  };

  const tagClassName = (className: string): string => {
    return tagType() === 'IMEI' || tagType() === 'chestnyy_znak'
      ? `${className} ${className}_type_additional-code`
      : `${className} ${className}_type_${tagType()}`;
  };

  const tagTextClassName = (className: string): string => {
    return tagType() === 'bag' || tagType() === 'other'
      ? `${className} ${className}_color_white`
      : tagType() === 'barcode'
      ? `${className} ${className}_color_blue`
      : tagType() === 'cancel'
      ? `${className} ${className}_color_red`
      : className;
  };

  const iconWidth = (): number => {
    return tagType() === 'bag' || tagType() === 'box' ? 38 : 32;
  };

  return (
    <div
      // className={tagClassName('tag')}>
      className={tagClassName('tag')}>
      {tagsWithIcon.includes(tagType()) ? (
        <Icon
          imgName={iconName()}
          width={iconWidth()}
        />
      ) : null}
      {/* <p className='tag__text'>{tagText}</p> */}
      <p className={tagTextClassName('tag__text')}>{tagText}</p>
    </div>
  );
};

export default Tag;

// const boxNames: string[] = [
//   'YMA',
//   'YMC',
//   'YME',
//   'YMF',
//   'YMG',
//   'YMH',
//   'YMJ',
//   'YML',
//   'YMN',
//   'YMO',
//   'YMP',
//   'YMQ',
//   'YMP',
//   'YMR',
//   'YMS',
//   'YMU',
//   'YMV',
//   'YMW',
//   'YMX',
//   'YMY',
// ];
// const bagNames: string[] = ['MYA', 'MYB', 'MYC', 'MYD', 'MYE'];
// const anotherPackNames: string[] = ['KSD', 'NONPACK', 'STRETCH'];

// const tagType: string[] = ['pack', 'box', 'other' 'barcode', 'IMEI', 'chestnyy_znak', 'cancel', 'info'];

// const tagsLib = {
//   pack: {
//     box: {
//       img: 'box',
//       text: type,
//     },
//     bag: {
//       img: 'bag',
//       text: type,
//     },
//     other: {
//       img: null,
//       text: type,
//     },
//   },
//   barcode: { img: type, text: type },
//   IMEI: { img: 'barcode', text: 'Сканировать IMEI' },
//   chestnyy_znak: { img: 'qrCode', text: 'Cканировать марку' },
//   cancel: { img: type, text: 'Товар отменён' },
//   info: { img: null, text: type },
// };
