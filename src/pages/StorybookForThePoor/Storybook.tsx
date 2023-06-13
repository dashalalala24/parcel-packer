import { useNavigate } from 'react-router';
import ActionButton, { ActionButtonBackground } from '../../components/ActionButton/ActionButton';
import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Counter from '../../components/Counter/Counter';
import Icon from '../../components/Icon/Icon';
import IconImages from '../../components/Icon/types';
import ItemImage from '../../components/ItemImage/ItemImage';
import Notification, { NotificationType } from '../../components/Notification/Notification';
import PackageCard from '../../components/PackageCard/PackageCard';
import Tag, { tagTypes } from '../../components/Tag/Tag';
import ItemCard from '../../components/ItemCard/ItemCard';

export interface IItem {
  id: string;
  name: string;
  pic: string;
  quantity: number;
  barcode: number;
}

const package1: IItem[] = [
  {
    id: '4',
    name: 'лимон',
    pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
    quantity: 3,
    barcode: 1234567890123,
  },
  {
    id: '5',
    name: 'шаверма',
    pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
    quantity: 2,
    barcode: 1234567890124,
  },
];

const package2: IItem[] = [
  {
    id: '1',
    name: 'брокколи',
    pic: 'https://pngimg.com/uploads/broccoli/broccoli_PNG72950.png',
    quantity: 1,
    barcode: 1234567890125,
  },
  {
    id: '2',
    name: 'кубик рубика',
    pic: 'https://pngimg.com/uploads/rubik_cube/rubik_cube_PNG21.png',
    quantity: 2,
    barcode: 1234567890126,
  },
  {
    id: '3',
    name: 'якорь',
    pic: 'https://pngimg.com/uploads/anchor/anchor_PNG5.png',
    quantity: 146,
    barcode: 1234567890127,
  },
  {
    id: '4',
    name: 'лимон',
    pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
    quantity: 1,
    barcode: 1234567890123,
  },
  {
    id: '5',
    name: 'шаверма',
    pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
    quantity: 1,
    barcode: 1234567890124,
  },
  // {
  //   id: '6',
  //   name: 'битая фотка',
  //   pic: 'https://pngimg.com/uploads.png',
  //   quantity: 1000,
  //   barcode: 1234567890128,
  // },
];

const Storybook = () => {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <Button
        onClick={() => {
          navigate(-1);
        }}
        color={ButtonColors.black}
        size={ButtonSizes.m}
        text='На главную'
      />
      <br />
      <Checkbox />
      <br />
      <Counter itemsScanned={0} itemsTotal={2} />
      <br />
      <Counter itemsScanned={6} itemsTotal={8} />
      <br />
      <Counter itemsScanned={10} itemsTotal={10} />
      <br />
      <Tag type={tagTypes.info} value='5 товаров' />
      <br />
      <Tag
        type={tagTypes.info}
        value='Очень длинное название Очень длинное название Очень длинное название Очень длинное название'
      />
      <br />
      <Tag type={tagTypes.box} value='YMA' />
      <br />
      <Tag type={tagTypes.bag} value='MYA' />
      <br />
      <Tag type={tagTypes.another} value='NONPACK' />
      <br />
      <Tag type={tagTypes.barcode} value={1234567823432} />
      <br />
      <Tag type={tagTypes.IMEI} />
      <br />
      <Tag type={tagTypes.qrCode} />
      <br />
      <Tag type={tagTypes.cancel} />
      <br />
      <Icon imgName={IconImages.burger} width={70} />
      <br />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        size={ButtonSizes.xs}
        text='Изменить состав'
        icon={IconImages.edit}
      />
      <br />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        size={ButtonSizes.s}
        text='Ввести с клавиатуры'
        icon={IconImages.keyboard}
      />
      <br />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        color={ButtonColors.black}
        size={ButtonSizes.m}
        text='Назад'
      />
      <br />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Позвать бригадира'
      />
      <br />
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        color={ButtonColors.yellow}
        size={ButtonSizes.xl}
        text='Готово'
        icon={IconImages.qrCode}
      />
      <br />
      <ActionButton
        icon={IconImages.cross}
        iconColor='black'
        backgroundColor={ActionButtonBackground.transparent}
        onClick={() => {
          console.log('Hello');
        }}
      />
      <br />
      <ActionButton
        icon={IconImages.backArrow}
        backgroundColor={ActionButtonBackground.beige}
        iconColor='white'
        onClick={() => {
          console.log('Hello');
        }}
      />
      <br />
      <Notification message='Бригадир скоро подойдёт' type={NotificationType.info} />
      <br />
      <Notification message='Штрихкод скопирован' type={NotificationType.success} />
      <br />
      <Notification message='Товар не найден' type={NotificationType.fault} />
      <br />
      <Notification
        message='Сканируйте IMEI товара'
        child={<ItemCard item={package1[0]} hasCounter={false} />}
        type={NotificationType.warning}
      />
      <br />
      <Notification
        message='Ошибка 505'
        messageDetails='Сервер не смог обработать полученный запрос'
        type={NotificationType.systemError}
      />
      <br />
      <ItemImage
        itemImg={'https://pngimg.com/uploads/broccoli/broccoli_PNG72950.png'}
        itemName={'Внезапно брокколи'}
      />
      <br />
      <ItemImage
        itemImg={'https://pngimg.com/uploads/rubik_cube/rubik_cube_PNG21.png'}
        itemName={'Кубик Рубика'}
        itemQuantity={2}
      />
      <br />
      <ItemImage
        itemImg={'https://pngimg.com/uploads/anchor/anchor_PNG5.png'}
        itemName={'Длинная горизонтальная картинка'}
        itemQuantity={100}
      />
      <br />
      <PackageCard items={package1} />
      <br />
      <PackageCard items={package2} />
    </div>
  );
};

export default Storybook;
