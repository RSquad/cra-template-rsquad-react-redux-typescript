import PokemonList from "../components/pokemon.list";
import "./pokemons.page.sass";

type TProps = {};

function PokemonsPage({}: TProps) {
  return (
    <div className="pokemons-page">
      <div className="pokemons-page__title">Pokemons</div>
      <div className="pokemons-page__list">
        <PokemonList />
      </div>
    </div>
  );
}

export default PokemonsPage;
