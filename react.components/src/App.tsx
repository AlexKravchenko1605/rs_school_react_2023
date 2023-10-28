import { Component } from 'react';
import { Props } from './assets/types';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonWithError from './components/UI/ButtonWithError';
import CardList from './components/UI/CardList';
import MyInput from './components/UI/MyInput';

class App extends Component<object, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      queryString: localStorage.getItem('queryString')
        ? localStorage.getItem('queryString')
        : 'Enter words',
      isLoaded: false,
      noResults: false,
      items: [],
    };
  }

  queryString: string = '';

  updateDate = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.getItem('queryString')
      ? localStorage.setItem('queryString', `${this.queryString}`)
      : localStorage.setItem('queryString', `${this.queryString}`);

    this.setState({ queryString: `${this.queryString}` });
    this.setState({
      isLoaded: false,
    });

    fetch(`https://swapi.dev/api/planets/?search=${this.queryString}`)
      .then((res) => res.json())
      .then((result) => {
        result.results.length > 0
          ? this.setState({
              isLoaded: true,
              items: result.results,
              noResults: false,
            })
          : this.setState({
              noResults: true,
              isLoaded: true,
            });
      });
  };

  updateQueryString = (e: React.FormEvent) => {
    e.preventDefault();
    this.queryString = (e.target as HTMLInputElement).value;
  };

  componentDidMount = () => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          isLoaded: true,
          items: result.results,
        })
      );
  };

  render() {
    const { queryString, isLoaded, noResults, items } = this.state;

    if (!isLoaded) {
      return <img src="../src/assets/styles/1483.png" />;
    }

    if (noResults) {
      return (
        <ErrorBoundary>
          <ButtonWithError />
          <MyInput
            updateData={this.updateDate}
            updateName={this.updateQueryString}
            placeholder={queryString}
          />
          <p className="try__again">Try again</p>
        </ErrorBoundary>
      );
    }
    return (
      <ErrorBoundary>
        <ButtonWithError />
        <MyInput
          updateData={this.updateDate}
          updateName={this.updateQueryString}
          placeholder={queryString}
        />
        <CardList planetState={items} />
      </ErrorBoundary>
    );
  }
}

export default App;
