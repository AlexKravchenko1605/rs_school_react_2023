import { useSelector } from 'react-redux';

import { reducerState } from './assets/types';
import '../src/assets/styles/Main.css';
import FrontPage from './components/FrontPage';
const App = () => {
  const state = useSelector((state: reducerState) => state.state);
  return (
    <div className={(state.theme as string) + ' main_css'}>
      <h1>Planet finder</h1>
      <Routes>
        <Route path="*" element={<FrontPage />} />
      </Routes>
    </div>
  );
};

export default App;
