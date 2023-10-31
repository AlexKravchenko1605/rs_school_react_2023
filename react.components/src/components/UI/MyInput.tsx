import { Component } from 'react';
import { Parentsprops } from '../../assets/types';

class MyInput extends Component<Parentsprops> {
  constructor(props: Parentsprops) {
    super(props);
  }
  render() {
    return (
      <form className="text-field__group" onSubmit={this.props.updateData}>
        <input
          type="input"
          placeholder={this.props.placeholder!}
          className="text-field__input"
          onChange={this.props.updateName}
        />
        <button className="text-field__btn">Find</button>
      </form>
    );
  }
}

export default MyInput;
