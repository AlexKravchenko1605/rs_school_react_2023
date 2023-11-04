import React from 'react';

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
};

export interface Parentsconfig {
  queryString: string | null;
  noResults: boolean;
  isLoaded: boolean;
  items: [];
}

export interface CardListProps {
  page: number;
  planetState: Planetdescription[];
  showInformation: (planetName: string) => void;
}

export interface Parentsprops {
  value: string | '';
  updateData: (e: React.FormEvent) => void;
  updateName: (e: React.FormEvent) => void;
}

export type Props = Readonly<Parentsconfig>;

export interface PaginationProps {
  items: Planetdescription[];
  showInformation: (planetName: string) => void;
  value: number;
  prevBtnDisabled?: boolean;
  nextBtnDisabled?: boolean;
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
