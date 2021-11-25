import React from 'react';
import { View, FlatList } from 'react-native';

import PokemonCard from './PokemonCard';

export default function PkemonList({ pokemons }) {
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
