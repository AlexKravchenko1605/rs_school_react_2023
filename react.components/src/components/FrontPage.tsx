import React, { useEffect, useState } from 'react';
import { PlanetList, State } from '../assets/types';
import { doSearch, getAllPlanets } from '../networkActions/networkActions';
import ErrorBoundary from './ErrorBoundary';
import ButtonWithError from './UI/ButtonWithError';
import MyInput from './UI/MyInput';
import { Pagination } from './UI/Pagination';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBarLayout from './UI/SideBarLayout';

const FronPage = () => {
  const [state, setState] = useState<State>({
    queryString: localStorage.getItem('queryString') as string | 'Enter words',
    isLoaded: false,
    noResults: false,
    next: null,
    previous: null,
    items: [],
    prevBtnDisabled: false,
    nextBtnDisabled: false,
    pageNumber: 1,
  });

  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarLoader, setShowSideBarLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('queryString')) {
      doSearch(state.queryString).then((result) => {
        updateStateWithPlanetListResult(result, 1);
      });
    } else {
      getAllPlanets().then((result) => {
        updateStateWithPlanetListResult(result, 1);
      });
    }
  }, []);

  const updateData = async (e: React.FormEvent) => {
    e.preventDefault();

    setState({ ...state, queryString: state.queryString });
    setState({
      ...state,
      isLoaded: false,
    });
    const result = await doSearch(state.queryString);
    updateStateWithPlanetListResult(result, 1, state.queryString);
  };

  const updateQueryString = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.getItem('queryString')
      ? localStorage.setItem(
          'queryString',
          (e.target as HTMLInputElement).value
        )
      : localStorage.setItem(
          'queryString',
          (e.target as HTMLInputElement).value
        );
    setState({ ...state, queryString: (e.target as HTMLInputElement).value });
  };

  const nextPage = () => {
    if (!state.next) {
      return;
    }
    const targetPageNumber = state.pageNumber + 1;
    togglePage(state.next, targetPageNumber);
    setShowSideBar(false);
  };

  const prevPage = () => {
    if (!state.previous) {
      return;
    }
    const targetPageNumber = state.pageNumber - 1;
    togglePage(state.previous, targetPageNumber);
    setShowSideBar(false);
  };

  const togglePage = (targetPageUrl: string, targetPageNumber: number) => {
    setState({ ...state, nextBtnDisabled: true, prevBtnDisabled: true });
    setState({ ...state, isLoaded: false });
    getAllPlanets(targetPageUrl).then((result) => {
      updateStateWithPlanetListResult(result as PlanetList, targetPageNumber);
    });
  };

  const updateStateWithPlanetListResult = (
    { next, previous, results }: PlanetList,
    targetPageNumber: number,
    query?: string
  ) => {
    setState({
      ...state,
      next,
      previous,
      isLoaded: true,
      items: results,
      nextBtnDisabled: !next,
      prevBtnDisabled: !previous,
      pageNumber: targetPageNumber,
      noResults: results.length === 0,
    });
    let navigateTo = '../';
    if (previous || next || query) {
      navigateTo = navigateTo + '?';
    }
    if (previous || next) {
      navigateTo = navigateTo + `page=${targetPageNumber}`;
    }
    if ((previous || next) && query) {
      navigateTo = navigateTo + `&`;
    }
    if (query) {
      navigateTo = navigateTo + `search=${query}`;
    }
    navigate(navigateTo);
  };

  const showInformation = (planetName: string) => {
    console.log(planetName);
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

  let tryAgain = null;
  if (state.noResults) {
    tryAgain = <p className="try__again">Try again</p>;
  }

  let cardsPagination = <img src="../src/assets/styles/1483.png" />;

  if (state.isLoaded) {
    cardsPagination = (
      <Pagination
        items={state.items}
        showInformation={showInformation}
        value={state.pageNumber}
        nextPage={nextPage}
        prevPage={prevPage}
        prevBtnDisabled={state.prevBtnDisabled}
        nextBtnDisabled={state.nextBtnDisabled}
        closeWindowClick={closeWindowClick}
      />
    );
  }
  if (showSideBarLoader) {
    return (
      <ErrorBoundary>
        <ButtonWithError />
        <MyInput
          updateData={updateData}
          updateName={updateQueryString}
          value={state.queryString}
        />
        {tryAgain}
        <div className="container">
          {cardsPagination}
          <img className="sidebar_loader" src="../src/assets/styles/1483.png" />
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ButtonWithError />
      <MyInput
        updateData={updateData}
        updateName={updateQueryString}
        value={state.queryString}
      />
      {tryAgain}
      <div className="container">
        {cardsPagination}
        <SideBarLayout
          items={state.items}
          active={showSideBar}
          closeWindow={closeWindow}
        />
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default FronPage;
