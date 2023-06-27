import { ChangeEvent, FC, useState } from 'react';
import './InputPopup.css';
import Input from '../Input/Input';
import Keyboard from '../Keyboard/Keyboard';
import { useAppDispatch } from '../../utils/hooks/redux';
import { setSystemError } from '../../services/redux/slices/notification/notification';
import { setScannedData } from '../../services/redux/slices/scannedData/scannedData';
import { useNavigate } from 'react-router-dom';

export enum InputPopupTypes {
  numbers = 'numbers',
  letters = 'letters',
}

interface IInputValue {
  inputValue: string;
  slice?: any;
}

interface IInputPopup {
  type: InputPopupTypes;
}

interface IEnteredDataState {
  concat(input: IInputValue): string | number[];
  enteredData: number[] | string[];
}

// export const useEnteredDataState = (): IEnteredDataState => {
//   const [enteredDataState, setEnteredDataState] = useState<IEnteredDataState>({ enteredData: [] });

//   return enteredDataState;
// };

const InputPopup: FC<IInputPopup> = ({ type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    dispatch(setScannedData(input.inputValue));
    navigate(-1);
    setInput({ inputValue: '' });
  };

  const onClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput({ inputValue: text });
    } catch (_) {
      dispatch(setSystemError({ message: '', messageDetails: 'Нет доступа к буферу обмена' }));
    }
  };

  return (
    // <div className={`input-popup ${isKeyboardOpened ? 'input-popup_opened' : ''}`}>
    <div className='input-popup input-popup_opened'>
      <h3 className='input-popup__title'>
        {type === 'letters' ? 'Введите код упаковки' : 'Введите или вставьте код'}
      </h3>
      <form className='input-popup__form' onSubmit={handleSubmit}>
        <Input onClick={onClick} type={type} value={input.inputValue} handleChange={handleChange} />
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
