import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Planet finder</h1>
      <Routes>
        <Route path="*" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
