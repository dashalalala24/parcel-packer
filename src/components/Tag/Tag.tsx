import { FC } from 'react';
import Icon from '../Icon/Icon';
import IconImages from '../Icon/types';
import './Tag.css';
import { useAppDispatch } from '../../utils/hooks/redux';
import { setSuccess, setSystemError } from '../../services/redux/slices/notification/notification';

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
  const dispatch = useAppDispatch();
  const tagText: string | number =
    type === 'cancel'
      ? 'Товар отменён'
      : type === 'IMEI'
      ? 'Сканировать IMEI'
      : type === 'qrCode'
      ? 'Cканировать марку'
      : value;

  const iconName = type === 'IMEI' ? IconImages.barcode : (type as unknown as IconImages);

  const iconWidth = type === 'bag' || type === 'box' ? '1.97vw' : '1.66vw';

  const onBarcodeClick = () => {
    if (type === tagTypes.barcode) {
      navigator.clipboard
        .writeText(String(value))
        .then(() => {
          dispatch(setSuccess({ message: 'Штрихкод скопирован' }));
        })
        .catch(err => {
          dispatch(setSystemError({ message: err.code, messageDetails: err.message }));
        });
    }
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
    <div
      onClick={onBarcodeClick}
      className={tagClassName('tag')}
      style={{ cursor: type === tagTypes.barcode ? 'pointer' : 'initial' }}
    >
      {type === 'another' || type === 'info' ? null : <Icon imgName={iconName} width={iconWidth} />}
      <p className={tagTextClassName('tag__text')}>{tagText}</p>
    </div>
  );
};

export default Tag;
