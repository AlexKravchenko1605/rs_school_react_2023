import { Provider } from 'react-redux';
import { store } from '../store/store';
import Mainpage from './mainpage';

export default function Page() {
  return (
    <Provider store={store}>
      <Mainpage />
    </Provider>
  );
}
