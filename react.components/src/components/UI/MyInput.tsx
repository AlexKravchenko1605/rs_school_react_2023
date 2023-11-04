import { Parentsprops } from '../../assets/types';
import { FC } from 'react';

const MyInput: FC<Parentsprops> = ({ updateData, updateName, value = '' }) => {
  return (
    <form className="text-field__group" onSubmit={updateData}>
      <input
        type="input"
        value={value}
        className="text-field__input"
        onChange={updateName}
      />
      <button className="text-field__btn">Find</button>
    </form>
  );
};

export default MyInput;
