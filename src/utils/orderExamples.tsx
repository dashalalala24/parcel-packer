export interface IItem {
  id: string;
  name: string;
  pic: string;
  quantity: number;
  barcode: number;
  IMEI_required?: boolean;
  qrCode_required?: boolean;
  cancel?: boolean;
}

export const order1: IItem[] = [
  {
    id: '7',
    name: 'Гель для душа SYNERGETIC «Кокос и масло макадамии», увлажняющий, натуральный, 750 мл',
    pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
    quantity: 4,
    barcode: 1234567890123,
  },
  {
    id: '8',
    name: 'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED',
    pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
    quantity: 1,
    barcode: 1234567890124,
    IMEI_required: true,
    cancel: true,
  },
  {
    id: '9',
    name: 'Электрогитара Fernandes Guitars LE1Z 3S 3-tone sunburst',
    pic: 'https://pngimg.com/uploads/electric_guitar/electric_guitar_PNG24174.png',
    quantity: 1,
    barcode: 2234567890123,
    IMEI_required: true,
  },
  {
    id: '10',
    name: 'Свеча ароматическая "Морская соль и Шалфей" / Wild aroma experience свеча в стеклянной банке красного цвета / 50 ч. горения, 200мл, 8 x 7',
    pic: 'https://pngimg.com/uploads/candle/candle_PNG7288.png',
    quantity: 5,
    barcode: 3234567890123,
    qrCode_required: true,
  },
  {
    id: '11',
    name: 'Стационарный IP-телефон Htek UC912E RU',
    pic: 'https://pngimg.com/uploads/phone/phone_PNG48897.png',
    quantity: 1,
    barcode: 4234567890123,
    IMEI_required: true,
  },
  {
    id: '12',
    name: 'Виниловая пластинка Кровосток. 72 Seasons (2 LP)',
    pic: 'https://pngimg.com/uploads/vinyl/vinyl_PNG24.png',
    quantity: 2,
    barcode: 5234567890123,
  },
  {
    id: '13',
    name: 'Часы-будильник с подсветкой Apeyron 15.2х11.5 см, арабский циферблат, бесшумный механизм с плавным ходом, античная бронза, MLT2207-515-5',
    pic: 'https://pngimg.com/uploads/clock/clock_PNG6634.png',
    quantity: 1,
    barcode: 6234567890123,
    IMEI_required: true,
  },
];

export const order2: IItem[] = [
  {
    id: '1',
    name: 'Шампунь для истонченных волос SYNERGETIC «Объем и укрепление» натуральный, бессульфатный, 750 мл',
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
    name: 'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED',
    pic: 'https://pngimg.com/uploads/anchor/anchor_PNG5.png',
    quantity: 146,
    barcode: 1234567890127,
    IMEI_required: true,
  },
  {
    id: '4',
    name: 'Умная колонка Яндекс Станция Лайт, ультрафиолет',
    pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
    quantity: 1,
    barcode: 1234567890123,
    qrCode_required: true,
    cancel: true,
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

// export const order1afterML: IItem[] = {[
//   {
//     id: '7',
//     name: 'Гель для душа SYNERGETIC «Кокос и масло макадамии», увлажняющий, натуральный, 750 мл',
//     pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
//     quantity: 4,
//     barcode: 1234567890123,
//   },
//   {
//     id: '8',
//     name: 'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED',
//     pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
//     quantity: 1,
//     barcode: 1234567890124,
//     IMEI_required: true,
//     cancel: true,
//   }],
//   [{
//     id: '9',
//     name: 'Электрогитара Fernandes Guitars LE1Z 3S 3-tone sunburst',
//     pic: 'https://pngimg.com/uploads/electric_guitar/electric_guitar_PNG24174.png',
//     quantity: 1,
//     barcode: 2234567890123,
//     IMEI_required: true,
//   },
//   {
//     id: '10',
//     name: 'Свеча ароматическая "Морская соль и Шалфей" / Wild aroma experience свеча в стеклянной банке красного цвета / 50 ч. горения, 200мл, 8 x 7',
//     pic: 'https://pngimg.com/uploads/candle/candle_PNG7288.png',
//     quantity: 5,
//     barcode: 3234567890123,
//     qrCode_required: true,
//   },
//   {
//     id: '11',
//     name: 'Стационарный IP-телефон Htek UC912E RU',
//     pic: 'https://pngimg.com/uploads/phone/phone_PNG48897.png',
//     quantity: 1,
//     barcode: 4234567890123,
//     IMEI_required: true,
//   },
//   {
//     id: '12',
//     name: 'Виниловая пластинка Кровосток. 72 Seasons (2 LP)',
//     pic: 'https://pngimg.com/uploads/vinyl/vinyl_PNG24.png',
//     quantity: 2,
//     barcode: 5234567890123,
//   },
//   {
//     id: '13',
//     name: 'Часы-будильник с подсветкой Apeyron 15.2х11.5 см, арабский циферблат, бесшумный механизм с плавным ходом, античная бронза, MLT2207-515-5',
//     pic: 'https://pngimg.com/uploads/clock/clock_PNG6634.png',
//     quantity: 1,
//     barcode: 6234567890123,
//     IMEI_required: true,
//   },
// ]}

// const order = {
//   orderId: '123',
//     items: [
//       {itemID: 1, name: 'часы', pic: '', ...остальные поля},
//       {itemID: 2, name: 'браслет', pic: '', ...остальные поля},
//       {itemID: 3, name: 'гитара', pic: '', ...остальные поля},
//       {itemID: 4, name: 'вилки', pic: '', ...остальные поля},
//       {itemID: 5, name: 'подушка', pic: '', ...остальные поля},
//       {itemID: 6, name: 'одеяло', pic: '', ...остальные поля}
//     ]
// }

export interface IPackage {
  packageId: number;
  recommendedPacks: string[];
  items: IItem[];
}

export interface IOrderAfterML {
  orderId: string;
  packages: IPackage[];
}

export const order1AfterML: IOrderAfterML = {
  orderId: '123',
  packages: [
    {
      packageId: 1,
      recommendedPacks: ['YMA', 'MYA', 'STRETCH'],
      items: [
        {
          id: '7',
          name: 'Гель для душа SYNERGETIC «Кокос и масло макадамии», увлажняющий, натуральный, 750 мл',
          pic: 'https://pngimg.com/uploads/lemon/lemon_PNG25276.png',
          quantity: 4,
          barcode: 1234567890123,
        },
        {
          id: '8',
          name: 'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED',
          pic: 'https://pngimg.com/uploads/kebab/kebab_PNG36.png',
          quantity: 1,
          barcode: 1234567890124,
          IMEI_required: true,
          cancel: true,
        },
      ],
    },
    {
      packageId: 2,
      recommendedPacks: ['YMZ'],
      items: [
        {
          id: '9',
          name: 'Электрогитара Fernandes Guitars LE1Z 3S 3-tone sunburst',
          pic: 'https://pngimg.com/uploads/electric_guitar/electric_guitar_PNG24174.png',
          quantity: 1,
          barcode: 2234567890123,
          IMEI_required: true,
        },
      ],
    },
    {
      packageId: 3,
      recommendedPacks: ['YMS', 'MYA', 'STRETCH'],
      items: [
        {
          id: '10',
          name: 'Свеча ароматическая "Морская соль и Шалфей" / Wild aroma experience свеча в стеклянной банке красного цвета / 50 ч. горения, 200мл, 8 x 7',
          pic: 'https://pngimg.com/uploads/candle/candle_PNG7288.png',
          quantity: 5,
          barcode: 3234567890123,
          qrCode_required: true,
        },
        {
          id: '11',
          name: 'Стационарный IP-телефон Htek UC912E RU',
          pic: 'https://pngimg.com/uploads/phone/phone_PNG48897.png',
          quantity: 1,
          barcode: 4234567890123,
          IMEI_required: true,
        },
        {
          id: '12',
          name: 'Виниловая пластинка Кровосток. 72 Seasons (2 LP)',
          pic: 'https://pngimg.com/uploads/vinyl/vinyl_PNG24.png',
          quantity: 2,
          barcode: 5234567890123,
        },
        {
          id: '13',
          name: 'Часы-будильник с подсветкой Apeyron 15.2х11.5 см, арабский циферблат, бесшумный механизм с плавным ходом, античная бронза, MLT2207-515-5',
          pic: 'https://pngimg.com/uploads/clock/clock_PNG6634.png',
          quantity: 1,
          barcode: 6234567890123,
          IMEI_required: true,
        },
      ],
    },
  ],
};

// const orderAfterML = {
//   orderId: '123',
//   packages: [{
//     recommendedPacks: ['YMA', 'MYA', 'STRETCH'],
//     itemsID: [ 1, 2]
//   },{
//     recommendedPacks: ['YMZ'],
//     items: [3]
//   },{
//     recommendedPacks: ['YMS', 'MYA', 'MYQ'],
//     items: [4,5,6]
//   },]
// }
