import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native';
import usePokemon from '../hooks/usePokemon';

export default function Pokemon() {
  const route = useRoute();
  const { pokemon } = usePokemon(route.params.id);

  if (!route.params.id || !pokemon) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text>Estoms en un pokemon con id: {pokemon.name}</Text>
    </View>
  )
}
