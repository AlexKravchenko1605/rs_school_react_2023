import { PaginationProps } from '../../assets/types';
import { FC } from 'react';
import CardList from './CardList';
import { MyContext } from '../../Mycontext/MyContext';

export const Pagination: FC<PaginationProps> = ({
  showInformation,
  prevPage,
  nextPage,
  closeWindowClick,
}) => {
  return (
    <MyContext.Consumer>
      {({ state }) => {
        console.log(state);
        return (
          <div className="cardsList_wrapper" onClick={() => closeWindowClick()}>
            <CardList showInformation={showInformation} />
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
    </MyContext.Consumer>
  );
};
