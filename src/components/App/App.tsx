import './App.css';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Counter
        itemsScanned={0}
        itemsTotal={2}
      />
      <Tag
        type='YMA'
        // value='5 товаров'
      />
      {/* Для проверки всех видов тегов: 'YMA' - коробка, 'MYA' - пакет, 'NONPACK' - другие упаковки,
      1234567823432 - штриход, 'IMEI', 'chestnyy_znak', 'cancel', 'info'. 
      value только для 'info' */}
      <Footer />
    </div>
  );
}

export default App;
