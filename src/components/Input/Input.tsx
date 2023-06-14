import { FC } from 'react';
import './Input.css';
import { InputPopupTypes } from '../InputPopup/InputPopup';

// export enum inputTypes {
//   numbers = 'numbers',
//   letters = 'letters',
// }

export interface IInput {
  type: InputPopupTypes;
  value: string;
  handleChange: any;
}

const Input: FC<IInput> = ({ type, value, handleChange }) => {
  return (
    <input
      className='input__element'
      id={`${type}-input`}
      type={`${type}`}
      name={`${type}-input`}
      autoComplete='off'
      value={value}
      onChange={handleChange}
      required
    />
  );
};

export default Input;
