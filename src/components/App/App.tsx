import './App.css';
import Tag from '../Tag/Tag';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import Icon from '../Icon/Icon';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import { IconImages } from '../Icon/types';
import ActionButton, { ActionButtonBackground } from '../ActionButton/ActionButton';
import Notification, { NotificationType } from '../Notification/Notification';
import Navbar, { navbarStatuses } from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Checkbox from '../Checkbox/Checkbox';
import ItemImage from '../ItemImage/ItemImage';

function App() {
  return (
    <div className='page'>
      <Header />
      <br />
      <Checkbox />
      <br />
      <Counter itemsScanned={0} itemsTotal={2} />
      <br />
      <Counter itemsScanned={6} itemsTotal={8} />
      <br />
      <Counter itemsScanned={10} itemsTotal={10} />
      <br />
      <Tag type='info' value='5 товаров' />
      <br />
      <Tag
        type='info'
        value='Очень длинное название Очень длинное название Очень длинное название Очень длинное название'
      />
      <br />
      <Tag type='YMA' />
      <br />
      <Tag type='MYA' />
      <br />
      <Tag type='NONPACK' />
      <br />
      <Tag type={1234567823432} />
      <br />
      <Tag type='IMEI' />
      <br />
      <Tag type='chestnyy_znak' />
      <br />
      <Tag type='cancel' />
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
        child={
          <div style={{ display: 'flex', gap: '20px', margin: '18px 0 0' }}>
            <ItemImage
              itemImg={'https://pngimg.com/uploads/broccoli/broccoli_PNG72950.png'}
              itemName={'Ожидаемо брокколи'}
            />
            <div>
              <p
                style={{
                  font: 'var(--font-2xs)',
                  margin: '0 0 17px',
                  maxHeight: 96,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED
              </p>
              <Tag type={1234567823432} />
            </div>
          </div>
        }
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
        itemsNumber={2}
      />
      <br />
      <ItemImage
        itemImg={'https://pngimg.com/uploads/anchor/anchor_PNG5.png'}
        itemName={'Длинная горизонтальная картинка'}
        itemsNumber={100}
      />
      <br />
      <Navbar status={navbarStatuses.default} />
      <Footer />
    </div>
  );
}

export default App;
