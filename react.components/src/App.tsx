import { useEffect, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonWithError from './components/UI/ButtonWithError';
import CardList from './components/UI/CardList';
import MyInput from './components/UI/MyInput';

const App = () => {
  const [state, setState] = useState({
    queryString: localStorage.getItem('queryString')
      ? localStorage.getItem('queryString')
      : 'Enter words',
    isLoaded: false,
    noResults: false,
    items: [],
  });

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((result) =>
        setState({ ...state, isLoaded: true, items: result.results })
      );
  }, [state]);

  const updateDate = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.getItem('queryString')
      ? localStorage.setItem('queryString', `${state.queryString}`)
      : localStorage.setItem('queryString', `${state.queryString}`);

    setState({ ...state, queryString: `${state.queryString}` });
    setState({
      ...state,
      isLoaded: false,
    });

    fetch(`https://swapi.dev/api/planets/?search=${state.queryString}`)
      .then((res) => res.json())
      .then((result) => {
        result.results.length > 0
          ? setState({
              ...state,
              isLoaded: true,
              items: result.results,
              noResults: false,
            })
          : setState({ ...state, noResults: true, isLoaded: true });
      });
  };

  const updateQueryString = (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, queryString: (e.target as HTMLInputElement).value });
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
};

export default App;
