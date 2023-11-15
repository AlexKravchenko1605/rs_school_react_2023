import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reducerState } from '../../assets/types';
import { FunctionalContext } from '../../Mycontext/MyContext';
import { updateQueryString } from '../../store/stateSlice';

const MyInput: FC = () => {
  const dispatch = useDispatch();
  const queryString = useSelector(
    (state: reducerState) => state.state.queryString
  );

  return (
    <FunctionalContext.Consumer>
      {({ updateData }) => {
        return (
          <form className="text-field__group" onSubmit={(e) => updateData(e)}>
            <input
              type="input"
              value={queryString}
              className="text-field__input"
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  updateQueryString({
                    queryString: (e.target as HTMLInputElement).value,
                  })
                );
              }}
            />
            <button className="text-field__btn">Find</button>
          </form>
        );
      }}
    </FunctionalContext.Consumer>
  );
};

export default MyInput;
