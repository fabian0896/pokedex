import React from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';

import { useFavorites } from '../hooks';
import { PokemonList } from '../components';

export default function Favorite() {
  const { favorites, loading } = useFavorites();

  if (loading) {
    return <ActivityIndicator size={20} style={{ marginTop: 50 }}/>
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={favorites} hasMore={false} />
    </SafeAreaView>
  );
}
