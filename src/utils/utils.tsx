// export function getItemsQuantity(items: IItemOfOrder[]): number {
//   // let itemsQuantityArray: number[] = [];

//   // items.map((item: IItemOfOrder) => {
//   //   itemsQuantityArray.push(item.count);
//   // });
//   l
//   return items.reduce((acc, num) => acc + num);
// }

export interface IItemOfOrder {
  count?: number;
  toDelete?: boolean;
  selected_cartontype: string;
  box_num: number;
  recommended_cartontype: string;
  selected_carton: string;
  sel_calc_cube: number;
  recommended_carton: string;
  pack_volume: number;
  rec_calc_cube: number;
  goods_wght: number;
  sku: string;
  barcode: number;
  name: string;
  pic: string;
  who: string;
  trackingid: string;
  a: number;
  b: number;
  c: number;
  cargotype: number[];
}

export interface IItemOfPackage {
  name: string;
  pic: string;
  barcode: string;
  sku: string;
  count: number;
  weight: string;
}

export interface IPackage {
  packageId: number;
  recommendedPacks: string[];
  items: IItemOfPackage[];
}

export interface IOrderPackages {
  orderId: string;
  packages: IPackage[];
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

export const getTotalItemsQuantity = (items: IItemOfOrder[]) => {
  let counter = 0;
  items.map(i => {
    if (i.count) {
      return (counter = counter + i.count);
    } else return counter++;
  });
  return counter;
};
