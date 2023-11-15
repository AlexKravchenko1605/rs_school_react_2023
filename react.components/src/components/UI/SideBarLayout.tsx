import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import { Planetdescription, reducerState } from '../../assets/types';
import { FC } from 'react';
import { doSearch } from '../../networkActions/networkActions';
import { useSelector } from 'react-redux';

const SideBarLayout: FC<{
  active: boolean;
}> = ({ active }) => {
  const handleLoader = (item: Planetdescription) => {
    return new Promise((resolve) => {
      doSearch(item.name).then((result) => {
        resolve(result);
      });
    });
  };
  const state = useSelector((state: reducerState) => state.state);

  return (
    <Routes>
      {state.items.map((item, index) => {
        return (
          <Route
            key={`planet-route-${item.name}`}
            path={`${index}`}
            element={<SideBar item={item} activeWindow={active} />}
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
