import { FC } from 'react';
import { Planetdescription } from '../../assets/types';

const SideBar: FC<{
  item: Planetdescription;
  activeWindow: boolean;
  closeWindow: () => void;
}> = ({ item, closeWindow, activeWindow }) => {
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
};

export default SideBar;
