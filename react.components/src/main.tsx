import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/styles/Main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="main_css">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
