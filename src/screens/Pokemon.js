import React from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native';

import usePokemon from '../hooks/usePokemon';
import { PokeHeader, PokeTypes} from '../components';

export default function Pokemon() {
  const route = useRoute();
  const { pokemon } = usePokemon(route.params.id);

  if (!route.params.id || !pokemon) {
    return <ActivityIndicator />
  }

  return (
    <ScrollView>
      <PokeHeader 
        image={pokemon.sprites.other['official-artwork'].front_default}
        name={pokemon.name}
        order={pokemon.order}
        type={pokemon.types[0].type.name} 
      />
      <PokeTypes types={pokemon.types} />
    </ScrollView>
  )
}
