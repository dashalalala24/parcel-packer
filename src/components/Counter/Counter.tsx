import { FC } from 'react';
import './Counter.css';

interface ICounter {
  quantity: number;
  percentage: number;
}

const CounterStyle = (percentage: number) => {
  return {
    // background: `linear-gradient(to right, rgba(42, 173, 46, ${
    //   percentage === 100 ? 1 : (100 - percentage) / 100
    // }) 50%, var(--beige-color) 50%)`,
    backgroundPosition: `${100 - percentage}%`,
  };
};

const Counter: FC<ICounter> = ({ quantity, percentage }) => {
  return (
    <div
      className='counter'
      style={CounterStyle(percentage)}>
      <p className={`counter__text ${percentage ? 'counter__text_full' : ''}`}>{quantity} шт.</p>
    </div>
  );
};

export default Counter;
