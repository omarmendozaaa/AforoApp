import React from 'react';
import {Image, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
      }}>
      <Image
        source={require('../assets/icons/Logo_BBVA_blanco.png')}
        style={{
          width: 102.99,
          height: 30,
        }}
      />
    </View>
  );
};
