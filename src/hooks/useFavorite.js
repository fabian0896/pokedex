import { useEffect, useCallback, useState } from 'react';

import { 
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from '../api/favorite';

const useFavorite = (id) => {
  const [isFavorite, setIsFavortie] = useState(false);
  
  useEffect(() => {
    isPokemonFavoriteApi(id)
      .then(setIsFavortie);
  }, [id]);
  
  const toggleFavorite = useCallback(async () => {
    await addPokemonFavoriteApi(id);
    const favRes = await isPokemonFavoriteApi(id);
    setIsFavortie(favRes);
  }, [id]);

  return {
    isFavorite,
    toggleFavorite,
  }
};

export default useFavorite;
