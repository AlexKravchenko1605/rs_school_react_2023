// import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import { reducerState } from '../../../assets/types';
import { FC } from 'react';
// import { doSearch } from '../../../networkActions/networkActions';
import { useSelector } from 'react-redux';

const SideBarLayout: FC<{
  active: boolean;
}> = ({ active }) => {
  // const handleLoader = (item: Planetdescription) => {
  //   return new Promise((resolve) => {
  //     doSearch(item.name).then((result) => {
  //       resolve(result);
  //     });
  //   });
  // };
  const state = useSelector((state: reducerState) => state.state);

  return (
    <>
      {state.items.map((item) => {
        return (
          <SideBar
            item={item}
            key={`planet-route-${item.name}`}
            activeWindow={active}
          />
        );
      })}
    </>
  );
};

export default SideBarLayout;
