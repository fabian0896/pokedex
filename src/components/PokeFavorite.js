import React, { useCallback, useEffect, useState } from 'react';
import Icon from '@expo/vector-icons/FontAwesome5';

import { useFavorite } from '../hooks';

export default function PokeFavorite({ id }) {
  const { isFavorite, toggleFavorite } = useFavorite(id);

  return (
    <Icon
      onPress={toggleFavorite} 
      name="heart" 
      color="#FFF"
      solid={isFavorite}
      size={20}
      style={{ marginRight: 20 }}
    />
  );
}
