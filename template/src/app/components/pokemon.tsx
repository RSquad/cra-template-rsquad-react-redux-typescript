import "./pokemon.sass";
import { useGetPokemonByNameQuery } from "../../redux/pokemon.api";

type TProps = { name: string };

function Pokemon({ name }: TProps) {
  const {
    data: pokemonData,
    error: getPokemonByNameError,
    isLoading: getPokemonByNameLoading,
  } = useGetPokemonByNameQuery(name);
  return (
    <div className="pokemon">
      {!getPokemonByNameLoading ? (
        <div className="pokemon__inner">
          <div className="pokemon__name">{pokemonData!.data.name}</div>
          <div className="pokemon__weight">
            weight: {pokemonData!.data.weight}
          </div>
          <div className="pokemon__height">
            height: {pokemonData!.data.height}
          </div>
        </div>
      ) : (
        <div className="pokemon-list__loader">Loading...</div>
      )}
    </div>
  );
}

export default Pokemon;
