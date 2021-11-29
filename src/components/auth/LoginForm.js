import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { user } from '../../utils/userDb';

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default function LoginForm({ onLogin }) {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (credentials, actions) => {
      try {
        onLogin(credentials);
      } catch (error) {
        setError(error.message);
        Keyboard.dismiss();
        actions.resetForm();
      }
    }
  });

  return (
    <View>
      <Text style={tw`text-2xl font-bold text-center mt-10`}>
        Iniciar Sesion
      </Text>
      <TextInput 
        placeholder="Nombre de usuario"
        autoCapitalize="none"
        style={tw`border rounded py-4 px-4 m-5`}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput 
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
        style={tw`border rounded py-4 px-4 mx-5`}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <TouchableHighlight onPress={() => formik.submitForm()} underlayColor="#FFF" activeOpacity={.3}>
        <View style={tw`mt-5 mx-5 bg-red-500 p-4 rounded shadow`}>
          <Text style={tw`text-center text-white font-bold`}>Ingresar</Text>
        </View>
      </TouchableHighlight>
      {Boolean(error) && (
        <View style={tw`m-5 p-4 border rounded border-red-700 bg-red-300 bg-opacity-40`}>
          <Text style={tw`text-red-900`}>{error}</Text>
        </View>
      )}
    </View>
  );
}
