import { CardListProps } from '../../assets/types';
import Card from './Card';
import { FC } from 'react';
import { MyContext } from '../../Mycontext/MyContext';

const CardList: FC<CardListProps> = ({ showInformation }) => {
  return (
    <MyContext.Consumer>
      {({ state }) => {
        return (
          <ul className="list__group">
            {state.items.map((item, index) => (
              <li key={item.name}>
                <Card
                  index={index}
                  description={item}
                  showInformation={showInformation}
                />
              </li>
            ))}
          </ul>
        );
      }}
    </MyContext.Consumer>
  );
};
export default CardList;
