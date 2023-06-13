import { FC } from 'react';
import './Keyboard.css';
import KeyboardButton, {
  KeyboardButtonColors,
  KeyboardButtonIcons,
  KeyboardButtonWidths,
} from '../KeyboardButton/KeyboardButton';
import {
  firstRowLetters,
  secondRowLetters,
  thirdRowLetters,
  firstRowNumbers,
  secondRowNumbers,
  thirdRowNumbers,
} from '../../utils/constants';
import { InputPopupTypes } from '../InputPopup/InputPopup';

// export enum KeyboardTypes {
//   letters = 'letters',
//   numbers = 'numbers',
// }

interface IKeyboard {
  type: InputPopupTypes;
  handleInputAddSign: any;
  handleInputDeleteSign: any;
}

const Keyboard: FC<IKeyboard> = ({ type, handleInputAddSign, handleInputDeleteSign }) => {
  return (
    <>
      <div className={`keyboard keyboard_type_${type}`}>
        <div className={`keyboard__row keyboard__row_type_${type}`}>
          {type === 'letters'
            ? firstRowLetters.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    key={i}
                    width={KeyboardButtonWidths.letterWidth}
                    color={KeyboardButtonColors.white}
                    onKeyboardButtonClick={() => handleInputAddSign(i)}
                  />
                );
              })
            : firstRowNumbers.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    key={i}
                    width={KeyboardButtonWidths.numberWidth}
                    color={KeyboardButtonColors.beige}
                    onKeyboardButtonClick={() => handleInputAddSign(i)}
                  />
                );
              })}
        </div>
        <div className={`keyboard__row keyboard__row_type_${type}`}>
          {type === 'letters'
            ? secondRowLetters.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    key={i}
                    width={KeyboardButtonWidths.letterWidth}
                    color={KeyboardButtonColors.white}
                    onKeyboardButtonClick={() => handleInputAddSign(i)}
                  />
                );
              })
            : secondRowNumbers.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    key={i}
                    width={KeyboardButtonWidths.numberWidth}
                    color={KeyboardButtonColors.beige}
                    onKeyboardButtonClick={() => handleInputAddSign(i)}
                  />
                );
              })}
        </div>
        {type === 'numbers' ? (
          <div className='keyboard__row keyboard__row_type_numbers'>
            {thirdRowNumbers.map(i => {
              return (
                <KeyboardButton
                  sign={i}
                  key={i}
                  width={KeyboardButtonWidths.numberWidth}
                  color={KeyboardButtonColors.beige}
                  onKeyboardButtonClick={() => handleInputAddSign(i)}
                />
              );
            })}
          </div>
        ) : null}
        <div className={`keyboard__row keyboard__row_type_${type}`}>
          <KeyboardButton
            icon={KeyboardButtonIcons.delete}
            key={'deleteLetter'}
            width={
              type === 'numbers'
                ? KeyboardButtonWidths.numberWidth
                : KeyboardButtonWidths.letterActionWidth
            }
            color={KeyboardButtonColors.beige}
            onKeyboardButtonClick={() => {
              handleInputDeleteSign();
            }}
          />
          {type === 'letters' ? (
            thirdRowLetters.map(i => {
              return (
                <KeyboardButton
                  sign={i}
                  key={i}
                  width={KeyboardButtonWidths.letterWidth}
                  color={KeyboardButtonColors.white}
                  onKeyboardButtonClick={() => handleInputAddSign(i)}
                />
              );
            })
          ) : (
            <KeyboardButton
              sign={'0'}
              key={'0'}
              width={KeyboardButtonWidths.numberWidth}
              color={KeyboardButtonColors.beige}
              onKeyboardButtonClick={() => handleInputAddSign('0')}
            />
          )}
          <KeyboardButton
            icon={KeyboardButtonIcons.enter}
            key={'enterNumber'}
            width={
              type === 'numbers'
                ? KeyboardButtonWidths.numberWidth
                : KeyboardButtonWidths.letterActionWidth
            }
            color={KeyboardButtonColors.yellow}
            actionSubmit={true}
          />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
