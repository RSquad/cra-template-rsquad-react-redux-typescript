import { TPokemonItem } from "../../redux/types";
import { Link } from "react-router-dom";
import "./pokemon.item.sass";

type TProps = { pokemon: TPokemonItem };

function PokemonItem({ pokemon }: TProps) {
  return (
    <div className="pokemon-item">
      <div className="pokemon-item__inner">
        <div className="pokemon-item__name">{pokemon.name}</div>
        <Link className="pokemon-item__link" to={`/pokemon/${pokemon.name}`}>
          more
        </Link>
      </div>
    </div>
  );
}

export default PokemonItem;
