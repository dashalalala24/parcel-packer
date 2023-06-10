import { FC } from 'react';
import './Counter.css';

interface ICounter {
  itemsTotal: number;
  itemsScanned: number;
}

const Counter: FC<ICounter> = ({ itemsTotal, itemsScanned }) => {
  const counterClassName = (className: string): string => {
    return itemsTotal === itemsScanned ? `${className} ${className}_full` : className;
  };

  const counterStyle: React.CSSProperties | undefined =
    itemsTotal === itemsScanned
      ? undefined
      : { backgroundPosition: `${100 - (itemsScanned / itemsTotal) * 100}%` };

  const counterText: string =
    itemsScanned > 0 && itemsScanned < itemsTotal
      ? `${itemsScanned}/${itemsTotal}`
      : `${itemsTotal} шт.`;

  return (
    <div
      className={counterClassName('counter')}
      style={counterStyle}>
      <p className={counterClassName('counter__text')}>{counterText}</p>
    </div>
  );
};

export default Counter;
