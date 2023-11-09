import { Planetdescription } from '../../assets/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FunctionalContext, MyContext } from '../../Mycontext/MyContext';

type Props = {
  index: number;
  description: Planetdescription;
};

const Card: FC<Props> = ({ index, description }) => {
  return (
    <MyContext.Consumer>
      {({ state }) => {
        return (
          <FunctionalContext.Consumer>
            {({ showInformation }) => {
              return (
                <Link
                  to={{
                    pathname: '' + index,
                    search:
                      `?page=${state.pageNumber}&details=` + description.name,
                  }}
                >
                  <div
                    className="card__item"
                    onClick={() => showInformation(description.name)}
                  >
                    <p>Planet name - {description.name}</p>
                    <p>Population - {description.population}</p>
                    <p>Climate - {description.climate}</p>
                  </div>
                </Link>
              );
            }}
          </FunctionalContext.Consumer>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
