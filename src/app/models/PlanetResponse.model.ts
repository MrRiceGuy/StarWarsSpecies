export interface StarWarsPlanetResponse {
  count: number;
  next: string;
  previous?: any;
  results: StarWarsPlanet[];
}

export interface StarWarsPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
