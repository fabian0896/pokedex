import { API_HOST } from '../utils/constants';
import axios from 'axios';

export async function getPokemonsApi(customUrl) {
  try {
    const url = customUrl || `${API_HOST}/pokemon?limit=20&offset=0`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export async function getPokemonDetailsApi(url) {
  const { data } = await axios.get(url);
  return data;
};

export async function getPokemonByIdApi(id) {
  const url = `${API_HOST}/pokemon/${id}`;
  const { data } = await axios.get(url);
  return data;
};