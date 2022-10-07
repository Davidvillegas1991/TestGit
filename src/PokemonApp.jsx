import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { startLoagingPokemon, setPokemons } from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks";


export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  const goNext = () => {

    dispatch(getPokemons(page+1));
  }

  const goBack = () => {

    dispatch(getPokemons(page-1));
  }
  return (
    <>
      <h1>Pokemon app</h1>
      <hr />
      <ul>
        {
          pokemons.map(poke => <li key={poke.name}>{poke.name}</li>)
        }
      </ul>
      <em>{page}</em>
      <br />
      <button
        disabled={isLoading}
        className="btn btn-outline-primary"
        onClick={goNext}>Next</button>
      <button
        disabled={isLoading || page == 0}
        className="btn btn-outline-primary"
        onClick={goBack}>Back</button>

    </>
  )
}
