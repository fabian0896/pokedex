import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { startCase } from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import { getColorByPkemonType } from '../utils/getColorByPokemonType';

import PokeTypes from './PokeTypes';

export default function PokeHeader({ image, type, name, order, types }) {
  return (
    <>
      <View style={StyleSheet.compose(
        styles.header,
        { backgroundColor: getColorByPkemonType(type) }
      )}/>
      <SafeAreaView style={tw`mx-4`}>
        <View style={tw`flex-row justify-between items-center pt-12`}>
          <View>
            <Text style={tw`text-white text-3xl font-bold`}>{startCase(name)}</Text>
            <PokeTypes types={types} />
          </View>
          <Text style={tw`text-white text-lg font-bold`}>#{String(order).padStart(3, '0')}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.pokeImage} />
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 400,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
    position: 'absolute',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeImage: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  }
})