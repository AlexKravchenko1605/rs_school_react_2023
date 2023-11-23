import { FC } from 'react';
import { Planetdescription } from '../../../assets/types';
import { FunctionalContext } from '../../../Mycontext/MyContext';

const SideBar: FC<{ item: Planetdescription; activeWindow: boolean }> = ({
  item,
  activeWindow,
}) => {
  return (
    <FunctionalContext.Consumer>
      {({ closeWindow }) => {
        return (
          <>
            {activeWindow && (
              <div className="plnate_info">
                <div className="planet_info__wrapper">
                  <button className="close_btn" onClick={() => closeWindow()}>
                    X
                  </button>
                  <h2>{item.name}</h2>
                  <h3>Climat - {item.climate}</h3>
                  <h3>Diametr - {item.diameter}</h3>
                  <h3>Orbital period - {item.orbital_period}</h3>
                  <h3>Population - {item.population}</h3>
                  <h3>Rotation period - {item.rotation_period}</h3>
                </div>
              </div>
            )}
          </>
        );
      }}
    </FunctionalContext.Consumer>
  );
};

export default SideBar;
