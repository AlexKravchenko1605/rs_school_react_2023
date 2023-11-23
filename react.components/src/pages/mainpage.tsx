import { useSelector } from 'react-redux';
import { reducerState } from '../public/assets/types';
import FrontPage from './components/FrontPage';
import style from '../public/assets/styles/styles.module.css';
export default function Mainpage() {
  const state = useSelector((state: reducerState) => state?.state);
  const styles = state?.theme;

  return (
    <div className={`${style.main_css} ${style[styles]}`}>
      <FrontPage />
    </div>
  );
}
