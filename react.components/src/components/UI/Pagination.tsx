import { FC } from 'react';
import CardList from './CardList';
import { FunctionalContext } from '../../Mycontext/MyContext';
import { reducerState } from '../../assets/types';
import { useSelector } from 'react-redux';
// import { stateNextPage } from '../../store/planetSlice';

export const Pagination: FC = () => {
  const state = useSelector((state: reducerState) => state.state);

  console.log(state);
  return (
    <FunctionalContext.Consumer>
      {({ nextPage, prevPage }) => {
        return (
          <div className="cardsList_wrapper">
            <CardList />
            {state.items.length > 1 && (
              <div className="container_pagination">
                <button
                  onClick={() => prevPage()}
                  disabled={state.prevBtnDisabled}
                >
                  {'<'}
                </button>
                <span>{state.pageNumber}</span>
                <button
                  onClick={() => {
                    nextPage();
                  }}
                  disabled={state.nextBtnDisabled}
                >
                  {'>'}
                </button>
              </div>
            )}
          </div>
        );
      }}
    </FunctionalContext.Consumer>
  );
};
