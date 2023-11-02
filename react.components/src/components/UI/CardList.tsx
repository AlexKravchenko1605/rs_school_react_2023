import { CardListProps } from '../../assets/types';
import Card from './Card';

const CardList = (props: CardListProps) => {
  const items = props.planetState;

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
            showInformation={props.showInformation}
          />
        </li>
      ))}
    </ul>
  );
};
export default CardList;
