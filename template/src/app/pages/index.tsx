import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonPage from "./pokemon.page";
import PokemonsPage from "./pokemons.page";

type TProps = {};

function Pages({}: TProps) {
  return (
    <Switch>
      <Route path="/pokemon/:name">
        <PokemonPage />
      </Route>
      <Route path="/">
        <PokemonsPage />
      </Route>
    </Switch>
  );
}

export default Pages;
