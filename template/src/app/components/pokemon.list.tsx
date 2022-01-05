import { useGetPokemonsQuery } from "../../redux/pokemon.api";
import PokemonItem from "./pokemon.item";
import "./pokemon.list.sass";

type TProps = {};

function PokemonList({}: TProps) {
  const {
    data: pokemonsData,
    error: getPokemonsError,
    isLoading: getPokemonsLoading,
  } = useGetPokemonsQuery();
  return (
    <div className="pokemon-list">
      {!getPokemonsLoading ? (
        <div className="pokemon-list__inner">
          {pokemonsData!.data.map((pokemon) => (
            <div className="pokemon-list__item">
              <PokemonItem pokemon={pokemon} />
            </div>
          ))}
        </div>
      ) : (
        <div className="pokemon-list__loader">Loading...</div>
      )}
    </div>
  );
}

export default PokemonList;
