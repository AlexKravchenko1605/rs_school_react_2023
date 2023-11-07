import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import { Planetdescription } from '../../assets/types';
import { FC } from 'react';
import { doSearch } from '../../networkActions/networkActions';

const SideBarLayout: FC<{
  items: Planetdescription[];
  active: boolean;
  closeWindow: () => void;
}> = ({ items, active, closeWindow }) => {
  const handleLoader = (item: Planetdescription) => {
    return new Promise((resolve) => {
      doSearch(item.name).then((result) => {
        resolve(result);
      });
    });
  };

  return (
    <Routes>
      {items.map((item, index) => {
        return (
          <Route
            key={`planet-route-${item.name}`}
            path={`${index}`}
            element={
              <SideBar
                item={item}
                activeWindow={active}
                closeWindow={closeWindow}
              />
            }
            loader={({}) => {
              return handleLoader(item);
            }}
          />
        );
      })}
    </Routes>
  );
};

export default SideBarLayout;
