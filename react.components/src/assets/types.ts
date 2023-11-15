import { Dispatch, SetStateAction } from 'react';

export type Planetdescription = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export type State = {
  queryString: string;
  isLoaded: boolean;
  noResults: boolean;
  next: string | null;
  previous: string | null;
  items: Planetdescription[];
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  pageNumber: number;
  theme: string;
};

export interface Parentsconfig {
  queryString: string | null;
  noResults: boolean;
  isLoaded: boolean;
  items: [];
}

export type Props = Readonly<Parentsconfig>;

export interface PaginationProps {
  showInformation: (planetName: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  closeWindowClick: () => void;
}

export type PlanetList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
};

export type Mycontext = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
};

export type FunctionalConext = {
  updateData: (e: React.FormEvent) => void;
  // updateQueryString: (e: React.FormEvent) => void;
  showInformation: (planetName: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  closeWindowClick: () => void;
  closeWindow: () => void;
};

export type reducerState = {
  state: State;
};
