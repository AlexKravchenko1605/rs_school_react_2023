import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    queryString: localStorage.getItem('queryString')
      ? localStorage.getItem('queryString')
      : '',
    isLoaded: false,
    noResults: false,
    next: null,
    previous: null,
    items: [],
    prevBtnDisabled: false,
    nextBtnDisabled: false,
    pageNumber: 1,
    theme: 'white',
  },
  reducers: {
    updateStateWithPlanetListResult(state, action): void {
      state.items = action.payload.items;
      state.pageNumber = action.payload.targetPageNumber;
      state.isLoaded = action.payload.isLoaded;
      state.noResults = action.payload.noResults;
      state.nextBtnDisabled = action.payload.nextBtnDisabled;
      state.prevBtnDisabled = action.payload.prevBtnDisabled;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    updateQueryString(state, action) {
      localStorage.getItem('queryString')
        ? localStorage.setItem('queryString', action.payload.queryString)
        : localStorage.setItem('queryString', action.payload.queryString);
      state.queryString = action.payload.queryString;
    },

    updateState(state, action) {
      state.nextBtnDisabled = action.payload.nextBtnDisabled;
      state.prevBtnDisabled = action.payload.prevBtnDisabled;
      state.isLoaded = action.payload.isLoaded;
      state.noResults = action.payload.noResults;
    },
    updatePlanetList(state, action) {
      state.pageNumber = action.payload.pageNumber;
      state.items = action.payload.result.results;
      state.isLoaded = action.payload.isLoaded;
      state.nextBtnDisabled = action.payload.nextBtnDisabled;
      state.prevBtnDisabled = action.payload.prevBtnDisabled;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    updateTheme(state, action) {
      state.theme = action.payload.theme;
      state.isLoaded = action.payload.isLoaded;
    },
  },
});
export const {
  updateStateWithPlanetListResult,
  updateQueryString,
  updateTheme,
  updateState,
  updatePlanetList,
} = stateSlice.actions;

export default stateSlice.reducer;
