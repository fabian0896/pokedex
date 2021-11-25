import { API_HOST } from '../utils/constants';
import axios from 'axios';

export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url) {
  console.log(url);
  const { data } = await axios.get(url);
  return data;
}