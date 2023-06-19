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

export function compareArraysAndDeleteUnique(a: number[], b: number[]) {
  let newArray: number[] = [];
  a.forEach(barcode => {
    if (b.indexOf(barcode) === -1) {
      newArray.push(barcode);
    }
  });
  return newArray;
}

export function compareArrays(a: number[], b: number[]) {
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;

  return true;
}

export const checkResponse = async (res: Response) => {
  if (res.ok) {
    return await res.json();
  }
  const error = await res.json();
  return Promise.reject(error.message);
};
