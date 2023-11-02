import { Link } from 'react-router-dom';
import { Planetdescription } from '../../assets/types';
import { doSearch } from '../../networkActions/networkActions';

const Card = (props: Planetdescription) => {
  return (
    <Link
      to={props.name}
      onClick={() => {
        doSearch(props.name).then((result) => console.log(result));
      }}
    >
      <div className="card__item">
        <p>Planet name - {props.name}</p>
        <p>Population - {props.population}</p>
        <p>Climate - {props.climate}</p>
      </div>
    </Link>
  );
};

export default Card;
