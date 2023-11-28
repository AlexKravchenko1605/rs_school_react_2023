import './assets/styles/main.css';

import { Route, Routes } from 'react-router-dom';
import { MainPage } from './assets/pages/mainPage/MainPage';
import { ControlledForm } from './assets/pages/controlledFormPage/controlledForm';
import { UnControlledForm } from './assets/pages/unControlledFormPage/unControlledForm';
import { NotFoundPage } from './assets/pages/NotFoundPage/NotFoundPage';
import { Layout } from './assets/components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="controlForm" element={<ControlledForm />} />
          <Route path="uncontrolForm" element={<UnControlledForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
