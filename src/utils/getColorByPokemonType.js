import { POKEMON_TYPE_COLORS } from './constants';

export const getColorByPkemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];