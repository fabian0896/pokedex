import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonsFavoriteApi } from '../api/favorite';
import { getPokemonByIdApi } from '../api/pokemon';

const useFavorites = (allData = true) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        setLoading(true);
        const ids = await getPokemonsFavoriteApi();
        if (!allData) {
          setFavorites(ids);
          setLoading(false);
          return;
        }
        const promises = ids.map((id) => getPokemonByIdApi(id));
        const data = await Promise.all(promises);
        const pokemons = data.map(p => ({
          id: p.id,
          name: p.name,
          type: p.types[0].type.name,
          order: p.order,
          image: p.sprites.other['official-artwork'].front_default,
        }));
        setFavorites(pokemons);
        setLoading(false);
      }
      fetchData();
    }, [])
  );

  return {
    favorites,
    loading,
    count: favorites.length,
  }
};

export default useFavorites;
