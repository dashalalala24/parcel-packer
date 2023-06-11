import './App.css';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import Header from '../Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
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
