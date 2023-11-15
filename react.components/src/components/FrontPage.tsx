import { useEffect, useState } from 'react';
import { PlanetList, reducerState } from '../assets/types';
import { doSearch, getAllPlanets } from '../networkActions/networkActions';
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

const FrontPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarLoader, setShowSideBarLoader] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state: reducerState) => state.state);

  useEffect(() => {
    if (localStorage.getItem('queryString')) {
      const querystring = localStorage.getItem('queryString');
      console.log(querystring);

      doSearch(querystring as string).then((result) => {
        console.log(result.results);
        dispatch(
          updateStateWithPlanetListResult({
            queryString: { querystring },
            targetPageNumber: state.pageNumber,
            next: result.next,
            previous: result.previous,
            isLoaded: true,
            items: result.results,
            nextBtnDisabled: !result.next,
            prevBtnDisabled: !result.previous,
            noResults: result.results.length === 0 ? true : false,
          })
        );
      });
    } else {
      getAllPlanets().then((result) => {
        dispatch(
          updateStateWithPlanetListResult({
            queryString: 'Enter words',
            targetPageNumber: state.pageNumber,
            next: result.next,
            previous: result.previous,
            isLoaded: true,
            items: result.results,
            nextBtnDisabled: !result.next,
            prevBtnDisabled: !result.previous,
            noResults: result.results.length === 0 ? true : false,
          })
        );
      });
    }
  }, []);

  const updateData = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateQueryString({ queryString: state.queryString }));
    dispatch(updateState({ isLoaded: false, noResults: false }));
    console.log(state);

    const result = await doSearch(state.queryString);
    console.log(result);
    dispatch(
      updateStateWithPlanetListResult({
        targetPageNumber: state.pageNumber,
        next: result.next,
        previous: result.previous,
        isLoaded: true,
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

  const togglePage = (targetPageUrl: string, targetPageNumber: number) => {
    dispatch(
      updateState({
        nextBtnDisabled: true,
        prevBtnDisabled: true,
        isLoaded: false,
      })
    );
    getAllPlanets(targetPageUrl).then((result) => {
      console.log('state', state);
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

      if (!result.next) {
        dispatch(
          updatePlanetList({
            result: result as PlanetList,
            pageNumber: targetPageNumber,
            nextBtnDisabled: true,
            prevBtnDisabled: false,
            isLoaded: true,
            next: result.next,
            previous: result.previous,
          })
        );
        return;
      }
      if (!result.previous) {
        dispatch(
          updatePlanetList({
            result: result as PlanetList,
            pageNumber: targetPageNumber,
            nextBtnDisabled: false,
            prevBtnDisabled: true,
            isLoaded: true,
            next: result.next,
            previous: result.previous,
          })
        );
        return;
      }
      dispatch(
        updatePlanetList({
          result: result as PlanetList,
          pageNumber: targetPageNumber,
          nextBtnDisabled: false,
          prevBtnDisabled: false,
          isLoaded: true,
          next: result.next,
          previous: result.previous,
        })
      );
    });
  };

  const showInformation = (planetName: string) => {
    setShowSideBarLoader(true);
    doSearch(planetName).then((result) => {
      setShowSideBar(true);
      setShowSideBarLoader(false);
      console.log(result);
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
          isLoaded: true,
        })
      );
    } else {
      sessionStorage.setItem('theme', 'white');
      dispatch(
        updateTheme({
          theme: sessionStorage.getItem('theme'),
          isLoaded: true,
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
  console.log(state.isLoaded);
  if (state.isLoaded) {
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
