import './App.css';
import Counter from '../Counter/Counter';

function App() {
  return (
    <div className='page'>
      <Counter
        quantity={4}
        percentage={100}
        // percentage это сколько процентов товаров ЕЩЕ осталось отсканировать, 100 - не отсканирован один товар, 0 - все отсканированы
      />
    </div>
  );
}

export default App;
