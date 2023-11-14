import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import { store } from './store/store';
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <h1>Planet finder</h1>
        <Routes>
          <Route path="*" element={<FrontPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
