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
  showInformation?: () => void;
};
export type State = {
  queryString: string;
  isLoaded: boolean;
  noResults: boolean;
  next: string;
  previous: string;
  items: never[];
  prevBtndisabled: boolean;
  nextBtndisabled: boolean;
  pageNumber: string;
};
export interface Parentsconfig {
  queryString: string | null;
  noResults: boolean;

  isLoaded: boolean;
  items: [];
}

export interface CardListProps {
  planetState: Planetdescription[];
  showInformation?: () => void;
}

export interface Parentsprops {
  value: string | null;
  updateData: (e: React.FormEvent) => void;
  updateName: (e: React.FormEvent) => void;
}

export type Props = Readonly<Parentsconfig>;

export interface PaginationProps {
  value?: string;
  prevBtndisabled?: boolean;
  nextBtndisabled?: boolean;
  nextPage: () => void;
  prevPage: () => void;
}
