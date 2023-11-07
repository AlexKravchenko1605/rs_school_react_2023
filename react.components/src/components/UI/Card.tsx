import { Planetdescription } from '../../assets/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  page: number;
  index: number;
  description: Planetdescription;
  showInformation: (planetName: string) => void;
};

const Card: FC<Props> = ({ page, index, description, showInformation }) => {
  const handleCardClick = () => {
    showInformation(description.name);
  };

  return (
    <Link
      to={{
        pathname: '' + index,
        search: `?page=${page}&details=` + description.name,
      }}
    >
      <div className="card__item" onClick={handleCardClick}>
        <p>Planet name - {description.name}</p>
        <p>Population - {description.population}</p>
        <p>Climate - {description.climate}</p>
      </div>
    </Link>
  );
};

export default Card;
