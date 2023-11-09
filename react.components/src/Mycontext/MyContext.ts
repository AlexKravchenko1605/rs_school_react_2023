import { createContext } from 'react';
import { FunctionalConext, Mycontext } from '../assets/types';

export const MyContext = createContext<Mycontext>({
  state: {
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
  setState: function (): void {
    throw new Error('Function not implemented.');
  },
});

export const FunctionalContext = createContext<FunctionalConext>({
  updateData: function (): void {
    throw new Error('Function not implemented.');
  },
  updateQueryString: function (): void {
    throw new Error('Function not implemented.');
  },
  showInformation: function (): void {
    throw new Error('Function not implemented.');
  },
  nextPage: function (): void {
    throw new Error('Function not implemented.');
  },
  prevPage: function (): void {
    throw new Error('Function not implemented.');
  },
  closeWindowClick: function (): void {
    throw new Error('Function not implemented.');
  },
});
