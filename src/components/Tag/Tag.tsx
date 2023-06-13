import { FC } from 'react';
import Icon from '../Icon/Icon';
import IconImages from '../Icon/types';
import './Tag.css';

export enum tagTypes {
  box = 'box',
  bag = 'bag',
  another = 'another',
  barcode = 'barcode',
  IMEI = 'IMEI',
  qrCode = 'qrCode',
  cancel = 'cancel',
  info = 'info',
}

interface ITag {
  type: tagTypes;
  value?: string | number;
}

const Tag: FC<ITag> = ({ type, value = '' }) => {
  const tagText: string | number =
    type === 'cancel'
      ? 'Товар отменён'
      : type === 'IMEI'
      ? 'Сканировать IMEI'
      : type === 'qrCode'
      ? 'Cканировать марку'
      : value;

  const iconName = (): IconImages => {
    return type === 'IMEI' ? IconImages.barcode : (type as unknown as IconImages);
  };

  const iconWidth = (): number => {
    return type === 'bag' || type === 'box' ? 38 : 32;
  };

  const tagClassName = (className: string): string => {
    return type === 'IMEI' || type === 'qrCode'
      ? `${className} ${className}_type_additional-code`
      : `${className} ${className}_type_${type}`;
  };

  const tagTextClassName = (className: string): string => {
    return type === 'bag' || type === 'another'
      ? `${className} ${className}_color_white`
      : type === 'barcode'
      ? `${className} ${className}_color_blue`
      : type === 'cancel'
      ? `${className} ${className}_color_red`
      : className;
  };

  return (
    <div className={tagClassName('tag')}>
      {type === 'another' || type === 'info' ? null : (
        <Icon imgName={iconName()} width={iconWidth()} />
      )}
      <p className={tagTextClassName('tag__text')}>{tagText}</p>
    </div>
  );
};

export default Tag;
