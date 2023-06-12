export interface IItem {
  id: string;
  name: string;
  pic: string;
  quantity: number;
  barcode: number;
  IMEI_required?: boolean;
  chestnyy_znak_required?: boolean;
  canceled?: boolean;
}

export const package1: IItem[] = [
  {
    id: '4',
    name: 'Гель для душа SYNERGETIC «Кокос и масло макадамии», увлажняющий, натуральный, 750 мл',
    pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
    quantity: 4,
    barcode: 1234567890123,
  },
  {
    id: '5',
    name: 'Просто шаверма',
    pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
    quantity: 1,
    barcode: 1234567890124,
    IMEI_required: true,
  },
];

export const package2: IItem[] = [
  {
    id: '1',
    name: 'Брокколи, 1кг',
    pic: 'https://pngimg.com/uploads/broccoli/broccoli_PNG72950.png',
    quantity: 1,
    barcode: 1234567890125,
  },
  {
    id: '2',
    name: 'Кубик рубика',
    pic: 'https://pngimg.com/uploads/rubik_cube/rubik_cube_PNG21.png',
    quantity: 2,
    barcode: 1234567890126,
  },
  {
    id: '3',
    name: 'Якорь',
    pic: 'https://pngimg.com/uploads/anchor/anchor_PNG5.png',
    quantity: 146,
    barcode: 1234567890127,
  },
  {
    id: '4',
    name: 'Лимон',
    pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
    quantity: 1,
    barcode: 1234567890123,
  },
  {
    id: '5',
    name: 'Просто шаверма',
    pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
    quantity: 1,
    barcode: 1234567890124,
  },
  // {
  //   id: '6',
  //   name: 'Битая фотка',
  //   pic: 'https://pngimg.com/uploads.png',
  //   quantity: 1000,
  //   barcode: 1234567890128,
  // },
];
