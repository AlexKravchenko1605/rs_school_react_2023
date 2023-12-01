import { configureStore } from '@reduxjs/toolkit';

import controlFormreducer from './controlFormSlice';
import unControlFormreducer from './unControlFormSlice';

export default configureStore({
  reducer: {
    controlForm: controlFormreducer,
    unControlForm: unControlFormreducer,
  },
});
