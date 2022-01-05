import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TDefaultResponse,
  TPokemon,
  TPokemonItem,
  TPokemonMeta,
  TPokemonResponse,
} from "./types";
import { pick } from "lodash";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<
      TDefaultResponse<TPokemonItem[], TPokemonMeta>,
      void
    >({
      query: () => `pokemon`,
      transformResponse: (response: TPokemonResponse) => ({
        meta: pick(response, "count", "next", "previous"),
        data: response.results,
      }),
    }),
    getPokemonByName: builder.query<TDefaultResponse<TPokemon>, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: TPokemon) => ({
        meta: {},
        data: response,
      }),
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
