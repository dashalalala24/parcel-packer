import './App.css';
import Counter from '../Counter/Counter';

function App() {
  return (
    <div className='page'>
      <Counter
        itemsScanned={0}
        itemsTotal={2}
      />
    </div>
  );
}

export default App;
