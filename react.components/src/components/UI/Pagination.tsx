import { PaginationProps } from '../../assets/types';

export const Pagination = (props: PaginationProps) => {
  return (
    <div className="container_pagination">
      <button onClick={() => props.prevPage()} disabled={props.prevBtndisabled}>
        {'<'}
      </button>
      <span>{props.value}</span>
      <button
        onClick={() => {
          props.nextPage();
        }}
        disabled={props.nextBtndisabled}
      >
        {'>'}
      </button>
    </div>
  );
};
