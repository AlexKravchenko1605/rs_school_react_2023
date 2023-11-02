import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import ButtonWithError from './components/UI/ButtonWithError';
import CardList from './components/UI/CardList';
import MyInput from './components/UI/MyInput';
import { Pagination } from './components/UI/Pagination';
import { doSearch, getAllPlanets } from './networkActions/networkActions';

const App = () => {
  const [state, setState] = useState({
    queryString: localStorage.getItem('queryString') || 'Enter words',
    isLoaded: false,
    noResults: false,
    next: '',
    previous: '',
    items: [],
    prevBtndisabled: false,
    nextBtndisabled: false,
    pageNumber: '',
  });

  useEffect(() => {
    if (localStorage.getItem('queryString')) {
      doSearch(state.queryString).then((result) => {
        setState({ ...state, isLoaded: true, items: result.results });
      });
    } else {
      getAllPlanets().then((result) => {
        setState({
          ...state,
          next: result.next,
          previous: result.previous,
          isLoaded: true,
          items: result.results,
          pageNumber: `${Number(result.next.at(-1) as unknown as number) - 1}`,
          prevBtndisabled: true,
        });
      });
    }
  }, []);

  const updateDate = async (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.getItem('queryString')
      ? localStorage.setItem('queryString', `${state.queryString}`)
      : localStorage.setItem('queryString', `${state.queryString}`);

    setState({ ...state, queryString: `${state.queryString}` });
    setState({
      ...state,
      isLoaded: false,
    });
    console.log(params);
    const APIresponse = await doSearch(state.queryString as string);
    APIresponse.results.length > 0
      ? setState({
          ...state,
          next: APIresponse.next,
          previous: APIresponse.previous,
          isLoaded: true,
          items: APIresponse.results,
          noResults: false,
        })
      : setState({
          ...state,
          next: APIresponse.next,
          previous: APIresponse.previous,
          noResults: true,
          isLoaded: true,
        });
  };

  const updateQueryString = (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, queryString: (e.target as HTMLInputElement).value });
  };

  const nextPage = () => {
    setState({ ...state, nextBtndisabled: true, prevBtndisabled: true });
    setState({ ...state, isLoaded: false });
    getAllPlanets(state.next).then((result) => {
      if (result.next === null) {
        setState({
          ...state,
          next: `${Number(state.previous.at(-1) as unknown as number) + 2}`,
          isLoaded: true,
          items: result.results,
          nextBtndisabled: true,
          prevBtndisabled: false,
          pageNumber: `${
            Number(state.previous.at(-1) as unknown as number) + 2
          }`,
        });
      } else {
        console.log(state, 'not null');
        setState({
          ...state,
          next: result.next,
          previous: result.previous,
          isLoaded: true,
          items: result.results,
          nextBtndisabled: false,
          prevBtndisabled: false,
          pageNumber: `${Number(result.next.at(-1) as unknown as number) - 1}`,
        });
      }
    });
  };

  const prevPage = () => {
    setState({ ...state, nextBtndisabled: true, prevBtndisabled: true });
    getAllPlanets(state.previous).then((result) => {
      if (result.previous === null) {
        setState({
          ...state,
          next: result.next,
          previous: result.previous,
          isLoaded: true,
          items: result.results,
          nextBtndisabled: false,
          prevBtndisabled: true,
          pageNumber: '1',
        });
      } else {
        setState({
          ...state,
          next: result.next,
          previous: result.previous,
          isLoaded: true,
          items: result.results,
          nextBtndisabled: false,
          prevBtndisabled: false,
          pageNumber: `${
            Number(state.previous.at(-1) as unknown as number) + 1
          }`,
        });
      }
    });
  };

  const showInformation = () => {
    console.log(name);
  };

  if (!state.isLoaded) {
    return <img src="../src/assets/styles/1483.png" />;
  }

  if (state.noResults) {
    return (
      <ErrorBoundary>
        <ButtonWithError />
        <MyInput
          updateData={updateDate}
          updateName={updateQueryString}
          value={state.queryString}
        />
        <p className="try__again">Try again</p>
      </ErrorBoundary>
    );
  }
  if (state.items.length === 1) {
    return (
      <ErrorBoundary>
        <ButtonWithError />
        <MyInput
          updateData={updateDate}
          updateName={updateQueryString}
          value={state.queryString}
        />
        <CardList planetState={state.items} />
      </ErrorBoundary>
    );
  }
  return (
    <ErrorBoundary>
      <ButtonWithError />
      <MyInput
        updateData={updateDate}
        updateName={updateQueryString}
        value={state.queryString}
      />
      <CardList planetState={state.items} showInformation={showInformation} />
      <Pagination
        value={state.pageNumber}
        nextPage={nextPage}
        prevPage={prevPage}
        prevBtndisabled={state.prevBtndisabled}
        nextBtndisabled={state.nextBtndisabled}
      />
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
