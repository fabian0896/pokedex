import React, { useEffect } from 'react'
import { ScrollView, ActivityIndicator, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome5';

import usePokemon from '../hooks/usePokemon';
import { PokeHeader, PokeTypes, PokeStats } from '../components';

export default function Pokemon() {
  const route = useRoute();
  const navigation = useNavigation();
  const { pokemon } = usePokemon(route.params.id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon 
          name="heart"
          color="#FFF"
          size={20}
          style={{ marginRight: 20 }}
        />
      ),
      headerLeft: () => (
        <Icon 
          name="arrow-left"
          color="#FFF"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()} 
        />
      ),
    });
  }, [pokemon]);

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
        types={pokemon.types}
      />
      <PokeStats stats={pokemon.stats} />
    </ScrollView>
  )
}
