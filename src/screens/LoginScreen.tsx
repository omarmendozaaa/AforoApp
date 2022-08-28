import {StackScreenProps} from '@react-navigation/stack';
import React, { useContext } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';
import {useForm} from '../hooks/useForm';
import { PermissionsContext } from '../context/PermissionsContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {documentNumber, password, onChange} = useForm({
    documentNumber: '',
    password: '',
  });

  const { permissions } = useContext( PermissionsContext );

  const onLogin = () => {
    console.log({documentNumber, password});
    ( permissions.locationStatus === 'granted' ) ?
    navigation.replace('MapScreen') : navigation.navigate('PermissionsScreen');
    Keyboard.dismiss();
  };
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.label}>DNI:</Text>
          <TextInput
            placeholder="Número de documento"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'documentNumber')}
            value={documentNumber}
            onSubmitEditing={onLogin}
          />
          <Text style={loginStyles.label}>Contraseña:</Text>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.SkipLogin}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                ( permissions.locationStatus === 'granted' ) ?
                navigation.navigate('MapScreen') : navigation.navigate('PermissionsScreen')
              }>
              <Text style={loginStyles.buttonText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
