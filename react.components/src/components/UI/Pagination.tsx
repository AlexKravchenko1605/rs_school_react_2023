import { PaginationProps } from '../../assets/types';
import { FC } from 'react';
import CardList from './CardList';

export const Pagination: FC<PaginationProps> = ({
  items,
  showInformation,
  prevPage,
  prevBtnDisabled,
  value,
  nextPage,
  nextBtnDisabled,
  closeWindowClick,
}) => {
  return (
    <div className="cardsList_wrapper" onClick={() => closeWindowClick()}>
      <CardList
        page={value}
        planetState={items}
        showInformation={showInformation}
      />
      {items.length > 1 && (
        <div className="container_pagination">
          <button onClick={() => prevPage()} disabled={prevBtnDisabled}>
            {'<'}
          </button>
          <span>{value}</span>
          <button onClick={() => nextPage()} disabled={nextBtnDisabled}>
            {'>'}
          </button>
        </div>
      )}
    </div>
  );
};
