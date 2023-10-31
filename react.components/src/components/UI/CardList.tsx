import { Component } from 'react';
import { CardListProps } from '../../assets/types';
import Card from './Card';

class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    const items = this.props.planetState;

    return (
      <ul className="list__group">
        {items.map((item) => (
          <li key={item.name}>
            <Card
              climate={item.climate}
              created={''}
              diameter={''}
              edited={''}
              films={[]}
              gravity={''}
              name={item.name}
              orbital_period={''}
              population={item.population}
              residents={[]}
              rotation_period={''}
              surface_water={''}
              terrain={''}
              url={''}
            />
          </li>
        ))}
      </ul>
    );
  }
}
export default CardList;
