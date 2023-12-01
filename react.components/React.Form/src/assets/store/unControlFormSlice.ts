import { createSlice } from '@reduxjs/toolkit';

const unControlFormSlice = createSlice({
  name: 'unControlForm',
  initialState: {
    unControl_name: '',
    unControl_age: '',
    unControl_email: '',
    unControl_password: '',
    unControl_confirm_password: '',
    unControl_select: '',
    unControl_select_country: '',
    unControl_T_C: '',
  },
  reducers: {
    updateStateWidthUNControlFormResult(state, action): void {
      state.unControl_name = action.payload.unControl_name;
      state.unControl_age = action.payload.unControl_age;
      state.unControl_email = action.payload.unControl_email;
      state.unControl_password = action.payload.unControl_password;
      state.unControl_confirm_password =
        action.payload.unControl_confirm_password;
      state.unControl_select = action.payload.unControl_select;
      state.unControl_T_C = action.payload.unControl_T_C;
      state.unControl_select_country = action.payload.unControl_select_country;
    },
  },
});
export const { updateStateWidthUNControlFormResult } =
  unControlFormSlice.actions;

export default unControlFormSlice.reducer;
