import { IItem } from './orderExamples';

export function getItemsQuantity(items: IItem[]): number {
  let itemsQuantityArray: number[] = [];

  items.map((item: IItem) => {
    itemsQuantityArray.push(item.quantity);
  });
  return itemsQuantityArray.reduce((acc, num) => acc + num);
}

export function infoTagDeclension(number: number): string {
  return number % 10 === 1 || number === 1
    ? 'товар'
    : number % 10 === 2 ||
      number % 10 === 3 ||
      number % 10 === 4 ||
      number === 2 ||
      number === 3 ||
      number === 4
    ? 'товарa'
    : 'товаров';
}
