import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function PokemonCard({ pokemon }) {
  return (
    <View style={tw`flex-1 p-2 bg-gray-300 mx-1 h-32 my-2 rounded shadow`}>
      <Text>#{String(pokemon.order).padStart(3, '0')}</Text>
      <Text style={tw`text-xl font-bold text-white`}>{pokemon.name}</Text>
      <Image
        style={tw`w-16 h-16 absolute bottom-2 right-2`}
        source={{ uri: pokemon.image }} 
      />
    </View>
  );
}
