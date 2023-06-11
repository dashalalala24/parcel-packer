import './App.css';
import Tag from '../Tag/Tag';
import Counter from '../Counter/Counter';
import Icon from '../Icon/Icon';
import Button, { ButtonColors, ButtonSizes } from '../Button/Button';
import { IconImages } from '../Icon/types';
import ActionButton, {
  ActionButtonBackground,
} from '../ActionButton/ActionButton';
import Footer from '../Footer/Footer';
import Notification, { NotificationType } from '../Notification/Notification';

function App() {
  return (
    <div className='page'>
      <br />
      <Counter itemsScanned={0} itemsTotal={2} />
      <br />
      <Tag
        type='YMA'
        // value='5 товаров'
      />
      <br />
      <Tag type='YMA' />
      {/* Для проверки всех видов тегов: 'YMA' - коробка, 'MYA' - пакет, 'NONPACK' - другие упаковки,
      1234567823432 - штриход, 'IMEI', 'chestnyy_znak', 'cancel', 'info'. 
      value только для 'info' */}
      <br />
      <Counter itemsScanned={3} itemsTotal={5} />
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
      <Notification
        message='Бригадир скоро подойдёт'
        type={NotificationType.info}
      />
      <br />
      <Notification
        message='Штрихкод скопирован'
        type={NotificationType.success}
      />
      <br />
      <Notification message='Товар не найден' type={NotificationType.fault} />
      <br />
      <Notification
        message='Сканируйте IMEI товара'
        child={<p>ТУТ БУДЕТ КОМПОНЕНТ АЙТЕМА</p>}
        type={NotificationType.warning}
      />
      <br />
      <Notification
        message='Ошибка 505'
        messageDetails='Сервер не смог обработать полученный запрос'
        type={NotificationType.systemError}
      />
      <br />

      <Footer />
    </div>
  );
}

export default App;
