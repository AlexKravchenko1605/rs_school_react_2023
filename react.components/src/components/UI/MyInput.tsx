import { FC } from 'react';
// import { useDispatch } from 'react-redux';
import { FunctionalContext, MyContext } from '../../Mycontext/MyContext';
// import { updateQueryStringCHECK } from '../../store/planetSlice';

const MyInput: FC = () => {
  // const dispatch = useDispatch();
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
                    // onChange={(e) => {
                    //   e.preventDefault();
                    //   dispatch(
                    //     updateQueryStringCHECK({
                    //       queryString: (e.target as HTMLInputElement).value,
                    //     })
                    //   );
                    // }}
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
