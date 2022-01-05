import { useParams } from "react-router-dom";
import Pokemon from "../components/pokemon";
import "./pokemon.page.sass";

type TProps = {};

function PokemonPage({}: TProps) {
  const { name } = useParams<{ name: string }>();
  return (
    <div className="pokemon-page">
      <div className="pokemon-page__inner">
        <Pokemon name={name} />
      </div>
    </div>
  );
}

export default PokemonPage;
