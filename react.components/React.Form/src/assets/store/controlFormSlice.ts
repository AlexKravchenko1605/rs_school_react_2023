import { createSlice } from '@reduxjs/toolkit';

const controlFormSlice = createSlice({
  name: 'controlForm',
  initialState: {
    control_name: '',
    control_age: '',
    control_email: '',
    control_password: '',
    control_confirm_password: '',
    control_select: '',
    control_T_C: '',
    control_select_country: '',
  },
  reducers: {
    updateStateWidthControlFormResult(state, action): void {
      state.control_name = action.payload.control_name;
      state.control_age = action.payload.control_age;
      state.control_email = action.payload.control_email;
      state.control_password = action.payload.control_password;
      state.control_confirm_password = action.payload.control_confirm_password;
      state.control_select = action.payload.control_select;
      state.control_T_C = action.payload.control_T_C;
      state.control_select_country = action.payload.control_select_country;
    },
  },
});
export const { updateStateWidthControlFormResult } = controlFormSlice.actions;

export default controlFormSlice.reducer;
