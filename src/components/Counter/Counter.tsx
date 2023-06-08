import { FC } from 'react';
import './Counter.css';

interface ICounter {
  quantity: number;
  percentage: number;
}

const Counter: FC<ICounter> = ({ quantity, percentage }) => {
  return (
    <div
      className='counter'
      style={{ backgroundPosition: `${percentage}%` }}>
      <p className={`counter__text ${percentage ? '' : 'counter__text_full'}`}>{quantity} шт.</p>
    </div>
  );
};

export default Counter;
