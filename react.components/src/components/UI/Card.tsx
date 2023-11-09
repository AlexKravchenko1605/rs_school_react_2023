import { Planetdescription } from '../../assets/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Mycontext/MyContext';

type Props = {
  index: number;
  description: Planetdescription;
  showInformation: (planetName: string) => void;
};

const Card: FC<Props> = ({ index, description, showInformation }) => {
  const handleCardClick = () => {
    showInformation(description.name);
  };
  return (
    <MyContext.Consumer>
      {({ state }) => {
        return (
          <Link
            to={{
              pathname: '' + index,
              search: `?page=${state.pageNumber}&details=` + description.name,
            }}
          >
            <div className="card__item" onClick={handleCardClick}>
              <p>Planet name - {description.name}</p>
              <p>Population - {description.population}</p>
              <p>Climate - {description.climate}</p>
            </div>
          </Link>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
