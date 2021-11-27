import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { startCase } from 'lodash';
import tw from 'tailwind-react-native-classnames';

export default function PokeStats({ stats }) {
  return (
    <View style={styles.content}>
      <View style={tw`mb-5`}>
        <Text style={tw`text-xl font-bold text-gray-800`}>Stats</Text>
      </View>
      {stats.map((item, index) => (
        <View style={tw`flex-row items-center mb-3`} key={index}>
          <View style={tw`w-4/12`}>
            <Text style={tw`text-gray-500 font-semibold`}>{startCase(item.stat.name)}</Text>
          </View>
          <View style={tw`w-2/12`}>
            <Text style={tw`text-center text-gray-800 font-semibold`}>{item.base_stat}</Text>
          </View>
          <View style={tw`w-6/12`}>
            <View style={tw`h-1 bg-gray-300 rounded-full overflow-hidden shadow`}>
              <View style={StyleSheet.compose(
                { width: `${item.base_stat}%` },
                tw`h-full ${item.base_stat > 49? 'bg-green-500' : 'bg-red-500'} rounded-full`,
              )} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 5,
  }
})