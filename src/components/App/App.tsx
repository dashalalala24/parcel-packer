import { useEffect, useState } from 'react';
import './App.css';
import Tag, { tagTypes } from '../Tag/Tag';
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
import { increment, incrementAsync } from '../../services/redux/slices/example/example';
import PackageCard from '../PackageCard/PackageCard';
import ItemCard from '../ItemCard/ItemCard';
import { package1, package2 } from '../../utils/orderExamples';
import Keyboard from '../Keyboard/Keyboard';
import Input from '../Input/Input';
import InputPopup, { InputPopupTypes } from '../InputPopup/InputPopup';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';

function App() {
  const count = useAppSelector(state => state.example.value);
  const dispatch = useAppDispatch();

  console.log(count);

  // const [isKeyboardOpened, setIsKeyboardOpened] = useState<boolean>(false);

  // function handleOpenKeyboard() {
  //   setIsKeyboardOpened(!isKeyboardOpened);
  // }

  // useEffect(() => {
  //   if (!isKeyboardOpened) return;

  //   const closeByEscape = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') {
  //       setIsKeyboardOpened(false);
  //     }
  //   };

  //   document.addEventListener('keydown', closeByEscape);

  //   return () => document.removeEventListener('keydown', closeByEscape);
  // }, [isKeyboardOpened]);

  return (
    <div className='app'>
      <Header />
      {/* <InputPopup type={InputPopupTypes.letters} isKeyboardOpened={isKeyboardOpened} /> */}
      {/* <InputPopup type={InputPopupTypes.numbers} isKeyboardOpened={isKeyboardOpened} /> */}
      <br />
      <Button
        onClick={() => {
          dispatch(incrementAsync(4));
        }}
        color={ButtonColors.black}
        size={ButtonSizes.m}
        text='Назад'
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
      <PackageCard items={package1} />
      <br />
      <ItemCard item={package2[0]} toDelete />
      {/* вместо toDelete в компоненте будет условие отрисовки в зависимости от роута */}
      <br />
      <Navbar
        status={navbarStatuses.default}
        // onOpenKeyboard={handleOpenKeyboard}
        // isKeyboardOpened={isKeyboardOpened}
      />
      <Footer />
    </div>
  );
}

export default App;
