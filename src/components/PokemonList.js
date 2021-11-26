import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import PokemonCard from './PokemonCard';

export default function PkemonList({ pokemons, loadMore, hasMore }) {
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        contentContainerStyle={{ padding: 5 }}
        showsVerticalScrollIndicator={false}
        onEndReached={hasMore && loadMore}
        onEndReachedThreshold={0.4}
        ListFooterComponent={hasMore && (
          <ActivityIndicator size="large" />
        )}
        ListFooterComponentStyle={{
          paddingTop: 20,
          paddingBottom: 60,
        }}
      />
    </View>
  );
}
