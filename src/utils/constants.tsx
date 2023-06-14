interface IPacks {
  box: string[];
  bag: string[];
  other: string[];
}

const packNames: IPacks = {
  box: [
    'YMA',
    'YMC',
    'YME',
    'YMF',
    'YMG',
    'YMH',
    'YMJ',
    'YML',
    'YMN',
    'YMO',
    'YMP',
    'YMQ',
    'YMP',
    'YMR',
    'YMS',
    'YMU',
    'YMV',
    'YMW',
    'YMX',
    'YMY',
  ],
  bag: ['MYA', 'MYB', 'MYC', 'MYD', 'MYE'],
  other: ['KSD', 'NONPACK', 'STRETCH'],
};

const firstRowLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRowLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const thirdRowLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const firstRowNumbers = ['1', '2', '3'];
const secondRowNumbers = ['4', '5', '6'];
const thirdRowNumbers = ['7', '8', '9'];

export {
  packNames,
  firstRowLetters,
  secondRowLetters,
  thirdRowLetters,
  firstRowNumbers,
  secondRowNumbers,
  thirdRowNumbers,
};
