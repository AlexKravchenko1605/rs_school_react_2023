import { Component } from 'react';
import { Planetdescription } from '../../assets/types';

class Card extends Component<Planetdescription> {
  constructor(props: Planetdescription) {
    super(props);
  }
  render() {
    return (
      <div className="card__item">
        <p>Planet name - {this.props.name}</p>
        <p>Population - {this.props.population}</p>
        <p>Climate - {this.props.climate}</p>
      </div>
    );
  }
}

export default Card;
