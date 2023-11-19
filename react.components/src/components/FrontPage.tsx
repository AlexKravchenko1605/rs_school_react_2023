import { useEffect, useState } from 'react';
import { PlanetList, reducerState } from '../assets/types';
import { doSearch } from '../networkActions/networkActions';
import ErrorBoundary from './ErrorBoundary';
import ButtonWithError from './UI/ButtonWithError';
import MyInput from './UI/MyInput';
import { Pagination } from './UI/Pagination';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBarLayout from './UI/SideBarLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  updatePlanetList,
  updateQueryString,
  updateState,
  updateStateWithPlanetListResult,
  updateTheme,
} from '../store/stateSlice';
import { FunctionalContext } from '../Mycontext/MyContext';
import {
  useDoSearchQuery,
  useGetPlanetsQuery,
  useLazyChangePageQuery,
  useLazyDoSearchQuery,
} from '../store/planetsAPI';

const FrontPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarLoader, setShowSideBarLoader] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state: reducerState) => state.state);
  const { data, isLoading } = useGetPlanetsQuery('');
  const { data: planet } = useDoSearchQuery(
    localStorage.getItem('queryString') || ''
  );
  const [fetchPage, { status }] = useLazyChangePageQuery();
  const [fetchPlanet] = useLazyDoSearchQuery();

  useEffect(() => {
    if (planet) {
      dispatch(
        updateStateWithPlanetListResult({
          queryString: localStorage.getItem('queryString'),
          targetPageNumber: state.pageNumber,
          next: planet.next,
          previous: planet.previous,
          items: planet.results,
          nextBtnDisabled: !planet.next,
          prevBtnDisabled: !planet.previous,
          noResults: planet.results.length === 0 ? true : false,
        })
      );
    } else {
      if (data) {
        dispatch(
          updateStateWithPlanetListResult({
            queryString: 'Enter words',
            targetPageNumber: state.pageNumber,
            next: data.next,
            previous: data.previous,
            items: data.results,
            nextBtnDisabled: !data.next,
            prevBtnDisabled: !data.previous,
            noResults: data.results.length === 0 ? true : false,
          })
        );
      }
    }
  }, [data]);

  const updateData = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateQueryString({ queryString: state.queryString }));
    dispatch(updateState({ noResults: false }));

    const result = await doSearch(state.queryString);
    console.log(result);
    dispatch(
      updateStateWithPlanetListResult({
        targetPageNumber: state.pageNumber,
        next: result.next,
        previous: result.previous,
        items: result.results,
        nextBtnDisabled: !result.next,
        prevBtnDisabled: !result.previous,
        noResults: result.results.length === 0 ? true : false,
      })
    );
  };

  const nextPage = () => {
    const targetPageNumber = state.pageNumber + 1;
    togglePage(state.next as string, targetPageNumber);
    const theme = sessionStorage.getItem('theme');
    dispatch(updateTheme({ theme: theme }));
    setShowSideBar(false);
  };

  const prevPage = () => {
    const targetPageNumber = state.pageNumber - 1;
    togglePage(state.previous as string, targetPageNumber);
    const theme = sessionStorage.getItem('theme');
    dispatch(updateTheme({ theme: theme }));
    setShowSideBar(false);
  };

  const togglePage = async (
    targetPageUrl: string,
    targetPageNumber: number
  ) => {
    dispatch(
      updateState({
        nextBtnDisabled: true,
        prevBtnDisabled: true,
      })
    );

    const result = await fetchPage(targetPageUrl);
    let navigateTo = '../';
    if (state.previous || state.next || state.queryString) {
      navigateTo = navigateTo + '?';
    }
    if (state.previous || state.next) {
      navigateTo = navigateTo + `page=${targetPageNumber}`;
    }
    if ((state.previous || state.next) && state.queryString) {
      navigateTo = navigateTo + `&`;
    }
    if (state.queryString) {
      navigateTo = navigateTo + `search=${state.queryString}`;
    }
    navigate(navigateTo);

    if (!result.data!.next) {
      dispatch(
        updatePlanetList({
          result: result.data?.results as unknown as PlanetList,
          pageNumber: targetPageNumber,
          nextBtnDisabled: true,
          prevBtnDisabled: false,
          next: result.data!.next,
          previous: result.data!.previous,
        })
      );
      return;
    }
    if (!result.data!.previous) {
      dispatch(
        updatePlanetList({
          result: result.data?.results as unknown as PlanetList,
          pageNumber: targetPageNumber,
          nextBtnDisabled: false,
          prevBtnDisabled: true,
          next: result.data!.next,
          previous: result.data!.previous,
        })
      );
      return;
    }

    dispatch(
      updatePlanetList({
        result: result.data?.results as unknown as PlanetList,
        pageNumber: targetPageNumber,
        nextBtnDisabled: false,
        prevBtnDisabled: false,
        next: result.data!.next,
        previous: result.data!.previous,
      })
    );
  };

  const showInformation = (planetName: string) => {
    setShowSideBarLoader(true);
    fetchPlanet(planetName).then(() => {
      setShowSideBar(true);
      setShowSideBarLoader(false);
    });
  };
  const closeWindow = () => {
    setShowSideBar(false);
    setShowSideBarLoader(false);
  };

  const closeWindowClick = () => {
    setShowSideBar(false);
  };
  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      sessionStorage.setItem('theme', 'dark');
      dispatch(
        updateTheme({
          theme: sessionStorage.getItem('theme'),
        })
      );
    } else {
      sessionStorage.setItem('theme', 'white');
      dispatch(
        updateTheme({
          theme: sessionStorage.getItem('theme'),
        })
      );
    }
  };
  let tryAgain = null;
  if (state.noResults) {
    tryAgain = <p className="try__again">Try again</p>;
  }

  let cardsPagination = (
    <div className="container_loader">
      <div className="loader"></div>
    </div>
  );

  if (status === 'pending' && !isLoading) {
    cardsPagination = (
      <div className="container_loader">
        <div className="loader"></div>
      </div>
    );
  } else if (!isLoading) {
    cardsPagination = <Pagination />;
  }

  if (showSideBarLoader) {
    return (
      <ErrorBoundary>
        <ButtonWithError />
        <MyInput />
        {tryAgain}
        <div className="container">
          {cardsPagination}
          <div className="container_loader">
            <div className="loader"></div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              changeTheme(e);
            }}
          />
          <span className="slider round"></span>
        </label>
        <p>Change theme</p>
      </>

      <FunctionalContext.Provider
        value={{
          nextPage,
          prevPage,
          showInformation,
          closeWindow,
          closeWindowClick,
          updateData,
        }}
      >
        <ButtonWithError />
        <MyInput />
        {tryAgain}
        <div className="container">
          {cardsPagination}
          {<SideBarLayout active={showSideBar} />}
          <Outlet />
        </div>
      </FunctionalContext.Provider>
    </ErrorBoundary>
  );
};

export default FrontPage;
