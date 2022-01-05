export type TPokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: TPokemonItem[];
};

export type TPokemonMeta = {
  count: number;
  next: string;
  previous: string;
};

export type TPokemonItem = {
  name: string;
  url: string;
};

export type TPokemon = {
  abilities: any[];
  base_experience: number;
  forms: TPokemonItem[];
  game_indices: any[];
  height: string;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: 1;
  past_types: any[];
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
};

export type TDefaultResponse<D = TDefaultData, M = TDefaultMeta> = {
  data: D;
  meta: M;
};

export type TDefaultData = {};

export type TDefaultMeta = {};
