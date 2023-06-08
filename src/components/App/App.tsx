import './App.css';
import Counter from '../Counter/Counter';

function App() {
  return (
    <div className='page'>
      <Counter
        quantity={4}
        percentage={100}
        // percentage – это сколько процентов товаров отсканировано: 0 - не отсканирован ни один товар, 100 - все отсканированы
      />
    </div>
  );
}

export default App;
