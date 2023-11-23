import { Planetdescription, reducerState } from '../../../assets/types';
import { FC } from 'react';
import Link from 'next/link';
import { FunctionalContext } from '../../../Mycontext/MyContext';
import { useSelector } from 'react-redux';

type Props = {
  index: number;
  description: Planetdescription;
};

const Card: FC<Props> = ({ index, description }) => {
  const state = useSelector((state: reducerState) => state.state);

  return (
    <FunctionalContext.Consumer>
      {({ showInformation }) => {
        return (
          <Link
            href={{
              pathname: '' + index,
              search: `?page=${state.pageNumber}&details=` + description.name,
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
};

export default Card;
