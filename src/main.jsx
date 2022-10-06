import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <PokemonApp />
    </React.StrictMode>
  </Provider>
)