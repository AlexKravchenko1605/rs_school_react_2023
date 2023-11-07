import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
