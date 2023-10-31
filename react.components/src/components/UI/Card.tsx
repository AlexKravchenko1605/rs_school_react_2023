import { Planetdescription } from '../../assets/types';

const Card = (props: Planetdescription) => {
  return (
    <div className="card__item">
      <p>Planet name - {props.name}</p>
      <p>Population - {props.population}</p>
      <p>Climate - {props.climate}</p>
    </div>
  );
};

export default Card;
