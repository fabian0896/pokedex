import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function UserData({ user, onLogout }) {
  return (
    <View>
      <View style={tw`mx-5 mt-10`}>
        <Text style={tw`text-2xl font-bold text-gray-800`}>Bienvenido,</Text>
        <Text style={tw`text-2xl font-bold text-gray-800`}>{user.firstName} {user.lastName}</Text>
      </View>
      <View style={tw`mx-5 mt-10`}>
        <Item title="Nombre:" text={`${user.firstName} ${user.lastName}`} />
        <Item title="Username:" text={user.username} />
        <Item title="Email:" text={user.email} />
        <Item title="Total Favoritos:" text="0 Pokemons" />
      </View>
      <View style={tw`mx-5 mt-10`}>
        <Pressable onPress={onLogout} style={tw`bg-red-500 p-4 rounded shadow`}>
          <Text style={tw`text-center text-white font-bold`}>Cerrar sesion</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Item({ title, text }) {
  return(
    <View style={tw`flex-row py-5 border-b border-gray-400`}>
      <Text style={tw`w-1/3 font-bold`}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

