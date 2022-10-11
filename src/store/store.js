import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todoApi } from './apis/todosApi'
import {counterSlice} from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
                                        .concat(todoApi.middleware)
})