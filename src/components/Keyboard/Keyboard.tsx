import { FC, useState } from 'react';
import './Keyboard.css';
import KeyboardButton, {
  KeyboardButtonColors,
  KeyboardButtonIcons,
  KeyboardButtonWidths,
} from '../KeyboardButton/KeyboardButton';

const firstRowLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const secondRowLetters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const thirdRowLetters = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const firstRowNumbers = ['1', '2', '3'];
const secondRowNumbers = ['4', '5', '6'];
const thirdRowNumbers = ['7', '8', '9'];

type Keyboard = 'letters' | 'numbers';

interface IKeyboard {
  type: Keyboard;
}

const Keyboard: FC<IKeyboard> = ({ type }) => {
  const [input, setInput] = useState('');

  function handleInputChange(e: { target: { value: any } }) {
    setInput(e.target.value);
  }

  return (
    <>
      <input
        className='input__element'
        id='code-input'
        type='code'
        name='code'
        autoComplete='off'
        minLength={3}
        maxLength={15}
        value={input}
        // onChange={handleChange}
        required
        style={{ fontSize: 50 }}
      />
      <div className={`keyboard keyboard_type_${type}`}>
        <div className={`keyboard__row keyboard__row_type_${type}`}>
          {type === 'letters'
            ? firstRowLetters.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    width={KeyboardButtonWidths.letterWidth}
                    color={KeyboardButtonColors.white}
                    onKeyboardButtonClick={() => {
                      setInput(input.concat(i));
                    }}
                  />
                );
              })
            : firstRowNumbers.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    width={KeyboardButtonWidths.numberWidth}
                    color={KeyboardButtonColors.beige}
                    onKeyboardButtonClick={() => {
                      setInput(input + i);
                    }}
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
                    width={KeyboardButtonWidths.letterWidth}
                    color={KeyboardButtonColors.white}
                    onKeyboardButtonClick={() => {
                      setInput(input + i);
                    }}
                  />
                );
              })
            : secondRowNumbers.map(i => {
                return (
                  <KeyboardButton
                    sign={i}
                    width={KeyboardButtonWidths.numberWidth}
                    color={KeyboardButtonColors.beige}
                    onKeyboardButtonClick={() => {
                      setInput(input + i);
                    }}
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
                  width={KeyboardButtonWidths.numberWidth}
                  color={KeyboardButtonColors.beige}
                  onKeyboardButtonClick={() => {
                    setInput(input + i);
                  }}
                />
              );
            })}
          </div>
        ) : null}
        <div className={`keyboard__row keyboard__row_type_${type}`}>
          <KeyboardButton
            icon={KeyboardButtonIcons.delete}
            width={
              type === 'numbers'
                ? KeyboardButtonWidths.numberWidth
                : KeyboardButtonWidths.letterActionWidth
            }
            color={KeyboardButtonColors.beige}
            onKeyboardButtonClick={() => {
              setInput(input.slice(0, -1));
            }}
          />
          {type === 'letters' ? (
            thirdRowLetters.map(i => {
              return (
                <KeyboardButton
                  sign={i}
                  width={KeyboardButtonWidths.letterWidth}
                  color={KeyboardButtonColors.white}
                  onKeyboardButtonClick={() => {
                    setInput(input + i);
                  }}
                />
              );
            })
          ) : (
            <KeyboardButton
              sign={'0'}
              width={KeyboardButtonWidths.numberWidth}
              color={KeyboardButtonColors.beige}
              onKeyboardButtonClick={() => {
                setInput(input + '0');
              }}
            />
          )}
          <KeyboardButton
            icon={KeyboardButtonIcons.enter}
            width={
              type === 'numbers'
                ? KeyboardButtonWidths.numberWidth
                : KeyboardButtonWidths.letterActionWidth
            }
            color={KeyboardButtonColors.yellow}
            onKeyboardButtonClick={() => {
              setInput('');
              alert('SUBMIT');
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

// function useEffect(arg0: () => void, arg1: never[]) {
//   throw new Error('Function not implemented.');
// }

// function onUpdateUser(arg0: { name: void; about: any }) {
//   throw new Error('Function not implemented.');
// }
