import { CardListProps } from '../../assets/types';
import Card from './Card';
import { FC } from 'react';

const CardList: FC<CardListProps> = ({
  page,
  planetState: items,
  showInformation,
}) => {
  return (
    <ul className="list__group">
      {items.map((item, index) => (
        <li key={item.name}>
          <Card
            page={page}
            index={index}
            description={item}
            showInformation={showInformation}
          />
        </li>
      ))}
    </ul>
  );
};
export default CardList;
