import './App.css';
import Tag from '../Tag/Tag';

import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import Icon from '../Icon/Icon';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import { IconImages } from '../Icon/types';
import ActionButton from '../ActionButton/ActionButton';
import Footer from '../Footer/Footer';
import Checkbox from '../Checkbox/Checkbox';

function App() {
  return (
    <div className='page'>
      <Header />
      <br />
      <Checkbox />
      <br />
      <Counter
        itemsScanned={0}
        itemsTotal={2}
      />
      <br />
      <Counter
        itemsScanned={6}
        itemsTotal={8}
      />
      <br />
      <Counter
        itemsScanned={10}
        itemsTotal={10}
      />
      <br />
      <Tag
        type='info'
        value='5 товаров'
      />
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
      <Icon
        imgName={IconImages.burger}
        width={70}
      />
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
        onClick={() => {
          console.log('Hello');
        }}
      />
      <br />
      <ActionButton
        icon={IconImages.backArrow}
        onClick={() => {
          console.log('Hello');
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
