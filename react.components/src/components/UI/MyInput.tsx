import { FC } from 'react';
import { FunctionalContext, MyContext } from '../../Mycontext/MyContext';

const MyInput: FC = () => {
  return (
    <MyContext.Consumer>
      {({ state }) => {
        return (
          <FunctionalContext.Consumer>
            {({ updateData, updateQueryString }) => {
              return (
                <form
                  className="text-field__group"
                  onSubmit={(e) => updateData(e)}
                >
                  <input
                    type="input"
                    value={state.queryString}
                    className="text-field__input"
                    onChange={(e) => updateQueryString(e)}
                  />
                  <button className="text-field__btn">Find</button>
                </form>
              );
            }}
          </FunctionalContext.Consumer>
        );
      }}
    </MyContext.Consumer>
  );
};

export default MyInput;
