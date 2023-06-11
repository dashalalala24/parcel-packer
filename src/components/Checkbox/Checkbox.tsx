import { FC } from 'react';
import './Checkbox.css';

const Checkbox: FC = () => {
  return (
    <label className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        // checked={}
        // onChange={handleChange}
      />
      <span className='checkbox__appearance' />
    </label>
  );
};

export default Checkbox;
