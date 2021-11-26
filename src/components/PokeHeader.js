import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import { getColorByPkemonType } from '../utils/getColorByPokemonType';

export default function PokeHeader({ image, type, name, order }) {
  return (
    <>
      <View style={StyleSheet.compose(
        styles.header,
        { backgroundColor: getColorByPkemonType(type) }
      )}/>
      <SafeAreaView style={tw`mx-3 mt-6`}>
        <View style={tw`flex-row justify-between items-center pt-10`}>
          <Text style={tw`text-white text-2xl font-bold`}>{name}</Text>
          <Text style={tw`text-white text-xl`}>#{String(order).padStart(3, '0')}</Text>
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