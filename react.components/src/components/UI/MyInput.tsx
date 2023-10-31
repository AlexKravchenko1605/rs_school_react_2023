import { Parentsprops } from '../../assets/types';

const MyInput = (props: Parentsprops) => {
  return (
    <form className="text-field__group" onSubmit={props.updateData}>
      <input
        type="input"
        placeholder={props.placeholder!}
        className="text-field__input"
        onChange={props.updateName}
      />
      <button className="text-field__btn">Find</button>
    </form>
  );
};

export default MyInput;
