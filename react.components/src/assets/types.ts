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

export interface Parentsconfig {
  queryString: string | null;
  noResults: boolean;

  isLoaded: boolean;
  items: [];
}

export interface CardListProps {
  planetState: Planetdescription[];
}

export interface Parentsprops {
  placeholder: string | null;
  updateData: (e: React.FormEvent) => void;
  updateName: (e: React.FormEvent) => void;
}

export type Props = Readonly<Parentsconfig>;
