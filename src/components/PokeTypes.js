import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { startCase } from 'lodash';
import tw from 'tailwind-react-native-classnames';

import { getColorByPkemonType } from '../utils/getColorByPokemonType';

export default function PokeTypes({ types }) {
  return (
    <View style={tw`flex-row mt-3`}>
      {types.map((item, index) => (
        <View
          style={tw`py-1 px-3 mr-2 text-sm bg-white bg-opacity-30 rounded-full`} 
          key={index}
        >
          <Text style={tw`text-white font-bold`}>{startCase(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}
