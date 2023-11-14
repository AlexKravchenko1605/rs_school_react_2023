import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    queryString: '',
    isLoaded: false,
    noResults: false,
    next: null,
    previous: null,
    items: [],
    prevBtnDisabled: false,
    nextBtnDisabled: false,
    pageNumber: 0,
  },
  reducers: {
    updateStateWithPlanetListResultCHECK(state, action): void {
      console.log(action);
      state.items = action.payload.result.results;
      state.pageNumber = action.payload.targetPageNumber;
      state.isLoaded = action.payload.isLoaded;
      state.noResults = action.payload.noResults;
      state.nextBtnDisabled = action.payload.nextBtnDisabled;
      state.prevBtnDisabled = action.payload.prevBtnDisabled;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      console.log(state);
    },
    updateQueryStringCHECK(state, action) {
      console.log(state, action);

      state.queryString = action.payload.queryString;
    },
  },
});
export const { updateStateWithPlanetListResultCHECK, updateQueryStringCHECK } =
  stateSlice.actions;
export default stateSlice.reducer;
