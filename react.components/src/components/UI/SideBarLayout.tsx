import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import { Planetdescription } from '../../assets/types';
import { FC } from 'react';
import { doSearch } from '../../networkActions/networkActions';
import { MyContext } from '../../Mycontext/MyContext';

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

  return (
    <MyContext.Consumer>
      {({ state }) => {
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
      }}
    </MyContext.Consumer>
  );
};

export default SideBarLayout;
