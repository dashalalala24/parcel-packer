import { ChangeEvent, FC, useEffect, useState } from 'react';
import './InputPopup.css';
import Input from '../Input/Input';
import Keyboard from '../Keyboard/Keyboard';

export enum InputPopupTypes {
  numbers = 'numbers',
  letters = 'letters',
}

interface IInputPopup {
  type: InputPopupTypes;
  // isKeyboardOpened: boolean;
}

const InputPopup: FC<IInputPopup> = ({
  type,
  // isKeyboardOpened
}) => {
  // useEffect(() => {
  //   setInput({ inputValue: '' });
  // }, [isKeyboardOpened]);

  interface IInputValue {
    inputValue: string;
    slice?: any;
  }

  const [input, setInput] = useState<IInputValue>({ inputValue: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ inputValue: e.target.value });
  };

  const handleInputAddSign = (i: string) => {
    setInput({ inputValue: input.inputValue + i });
  };

  const handleInputDeleteSign = () => {
    setInput({ inputValue: input.inputValue.slice(0, -1) });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('SUBMITTED');
    setInput({ inputValue: '' });
  };

  console.log(input);
  return (
    // <div className={`input-popup ${isKeyboardOpened ? 'input-popup_opened' : ''}`}>
    <div className='input-popup input-popup_opened'>
      <h3 className='input-popup__title'>
        {type === 'letters' ? 'Введите код упаковки' : 'Введите или вставьте код'}
      </h3>
      <form className='input-popup__form' onSubmit={handleSubmit}>
        <Input type={type} value={input.inputValue} handleChange={handleChange} />
        <Keyboard
          type={type}
          handleInputAddSign={handleInputAddSign}
          handleInputDeleteSign={handleInputDeleteSign}
        />
      </form>
    </div>
  );
};

export default InputPopup;
