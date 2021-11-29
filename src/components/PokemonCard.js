import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { startCase } from 'lodash';

import { getColorByPkemonType } from '../utils/getColorByPokemonType';

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Pokemon', { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={StyleSheet.compose({
        backgroundColor: getColorByPkemonType(pokemon.type)
      },
      tw`flex-1 p-2 mx-1 h-32 my-1 rounded-lg shadow`,
      )}>
        <Text style={tw`text-white`}>#{String(pokemon.order).padStart(3, '0')}</Text>
        <Text style={tw`text-lg font-bold text-white`}>{startCase(pokemon.name)}</Text>
        <Image
          style={tw`w-20 h-20 absolute bottom-1 right-1`}
          source={{ uri: pokemon.image }} 
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
