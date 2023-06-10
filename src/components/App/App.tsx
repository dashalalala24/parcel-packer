import './App.css';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';

function App() {
  return (
    <div className='app'>
      <Counter
        itemsScanned={0}
        itemsTotal={2}
      />
      <Tag
        type='info'
        value='5 товаров'
      />
      {/* Для проверки всех видов тегов: 'YMA' - коробка, 'MYA' - пакет, 'NONPACK' - другие упаковки,
      1234 5678 234 32 - штриход, 'IMEI', 'chestnyy_znak', 'cancel', 'info'. 
      value только для 'info' */}
    </div>
  );
}

export default App;
