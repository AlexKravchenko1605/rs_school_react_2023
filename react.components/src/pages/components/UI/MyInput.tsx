import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reducerState } from '../../../public/assets/types';
import { FunctionalContext } from '../../../Mycontext/MyContext';
import { updateQueryString } from '../../../store/stateSlice';
import style from '../../../public/assets/styles/styles.module.css';

const MyInput: FC = () => {
  const dispatch = useDispatch();
  const queryString = useSelector(
    (state: reducerState) => state.state.queryString
  );

  return (
    <FunctionalContext.Consumer>
      {({ updateData }) => {
        return (
          <form
            className={style.text_field__group}
            onSubmit={(e) => updateData(e)}
          >
            <input
              type="input"
              value={queryString}
              className={style.text_field__input}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  updateQueryString({
                    queryString: (e.target as HTMLInputElement).value,
                  })
                );
              }}
            />
            <button className={style.text_field__btn}>Find</button>
          </form>
        );
      }}
    </FunctionalContext.Consumer>
  );
};

export default MyInput;
