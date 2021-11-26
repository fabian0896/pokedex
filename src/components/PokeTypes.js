import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { getColorByPkemonType } from '../utils/getColorByPokemonType';

export default function PokeTypes({ types }) {
  return (
    <View style={tw`flex-row justify-center mt-5`}>
      {types.map((item, index) => (
        <View
          style={StyleSheet.compose(
            {backgroundColor: getColorByPkemonType(item.type.name)},
            tw`py-2 px-4 mx-2 rounded-full shadow`,
          )} 
          key={index}
        >
          <Text style={tw`text-white font-bold`}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}
