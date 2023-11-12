import { FC } from 'react';
import CardList from './CardList';
import { FunctionalContext, MyContext } from '../../Mycontext/MyContext';

export const Pagination: FC = () => {
  return (
    <MyContext.Consumer>
      {({ state }) => {
        return (
          <FunctionalContext.Consumer>
            {({ closeWindowClick, prevPage, nextPage }) => {
              return (
                <div
                  className="cardsList_wrapper"
                  onClick={() => closeWindowClick()}
                >
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
                        onClick={() => nextPage()}
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
      }}
    </MyContext.Consumer>
  );
};
