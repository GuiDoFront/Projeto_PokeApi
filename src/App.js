import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Searchbar from './componentes/Searchbar';
import Pokedex from './componentes/Pokedex';
import { getPokemons, getPokemonData, searchPokemon } from './api'; // precisa importar também
import { FavoriteProvider } from './context/FavoritesContext';

const favoritesKey = "f"
function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [totalPages, setTotalPages] = useState (0);
  const[favorites, setFavorites] = useState([]);
  const itensPerPage = 50;

  const fetchPokemons = async () => {
    try {
      setLoading(true);

      const data = await getPokemons(itensPerPage, itensPerPage * page); // 20 = limit, 0 = offset
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));

    } catch (error) {
      console.log("fetchPokemons error", error);
      
    }
  };
const loadFavoritePokemons = () =>{
 const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
 setFavorites(pokemons)
}
  useEffect(() =>{
    loadFavoritePokemons();
  },[]);

  useEffect(() => {
    console.log("carregou!")
    fetchPokemons();
  }, [page]);

const updateFavoritePokemons = (name) => {
  const updateFavorites = [...favorites]
  const favoriteIndex = favorites.indexOf(name)
  if(favoriteIndex >= 0){
    updateFavorites.slice (favoriteIndex, 1);

  }else{
    updateFavorites.push(name);
  }
  window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites))
  setFavorites(updateFavorites)
}

const onSearchHandler = async (pokemon) => {
  if (!pokemon) {
    return fetchPokemons();
  }

  setLoading(true);
  setNotFound(false);

  try {
    const result = await searchPokemon(pokemon.toLowerCase());

    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    setNotFound(true); // se der erro (404, etc), mostra mensagem
  }

  setLoading(false);
};


  return (

    <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons,}}>
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? (<div className="not-found-text">❌ Pokemon inexistente</div>):
      
      (<Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages ={totalPages} />
      )}
    </div>
    </FavoriteProvider>
  );
}

export default App;
