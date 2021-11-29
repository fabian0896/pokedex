import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVORITE_STORAGE } from '../utils/constants';

export async function getPokemonsFavoriteApi() {
  try {
    const res = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(res || '[]');
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    if (favorites.includes(id)) {
      const index = favorites.indexOf(id);
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    return favorites.includes(id);
  } catch (error) {
    throw error;
  }
}