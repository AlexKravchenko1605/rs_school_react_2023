import Card from './Card';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { reducerState } from '../../assets/types';

const CardList: FC = () => {
  const state = useSelector((state: reducerState) => state.state);

  return (
    <>
      {state.items.length >= 1 && (
        <ul className="list__group">
          {state.items.map((item, index) => (
            <li key={item.name}>
              <Card index={index} description={item} />
            </li>
          ))}
        </ul>
      )}
      {state.items.length === 0 && <h3>No cards to display</h3>}
    </>
  );
};
export default CardList;
