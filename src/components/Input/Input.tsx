import { FC } from 'react';
import './Input.css';

const Input: FC = () => {
  return (
    <form className='input'>
      <input
        className='input__element'
        id='code-input'
        type='code'
        name='code'
        autoComplete='off'
        minLength={3}
        maxLength={15}
        // value={values.code || ''}
        // onChange={handleChange}
        required
      />
    </form>
  );
};

export default Input;
