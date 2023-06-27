import { FC } from 'react';
import './Counter.css';
import { useLocation, useParams } from 'react-router-dom';

interface ICounter {
  itemsTotal: number;
  itemsScanned: number;
}

const Counter: FC<ICounter> = ({ itemsTotal, itemsScanned }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const counterClassName = (className: string): string => {
    return itemsTotal === itemsScanned || currentPath.startsWith(`/package-list`)
      ? `${className} ${className}_full`
      : className;
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
    <div className={counterClassName('counter')} style={counterStyle}>
      <p className={counterClassName('counter__text')}>{counterText}</p>
    </div>
  );
};

export default Counter;
