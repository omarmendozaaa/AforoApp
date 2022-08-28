import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../screens/MapScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { OfficeScreen } from '../screens/OfficeScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../screens/LoadingScreen';

export type RootStackParams = {
  LoginScreen: undefined,
  MapScreen: undefined,
  OfficeScreen: { latitude:string; longitude:string; },
  PermissionsScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const { permissions } = useContext( PermissionsContext );
  if ( permissions.locationStatus === 'unavailable' ) {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator >
      <Stack.Screen name="LoginScreen" options={{title:'', headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="MapScreen" options={{title:'Lista de oficinas'}} component={ MapScreen } />
      <Stack.Screen name="PermissionsScreen" component={ PermissionsScreen } />
      <Stack.Screen name="OfficeScreen" options={{title:'Oficina'}} component={OfficeScreen} />
    </Stack.Navigator>
  );
};
