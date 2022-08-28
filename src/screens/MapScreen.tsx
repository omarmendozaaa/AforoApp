import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Button } from 'react-native';
import { Map } from '../components/Map';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'MapScreen'>{}

export const MapScreen = ({navigation}:Props) => {
  return (
    <View style={{ flex: 1 }}>
        <Map />
        <Button title = "Go to Oficina" onPress={()=>navigation.navigate('OfficeScreen',{id:0})}/>
    </View>
  );
};

