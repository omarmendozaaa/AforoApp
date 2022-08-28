import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import IconBanck from '../assets/Images/icon-bank.png';
export const OfficeScreen = () => {
  return (
    <View>
        <SafeAreaView style={{alignItems:'center', marginTop:40}}>
            <Image source={IconBanck} />
            <Text style={{fontSize:25, color:'#000000'}}>
              Banco BBVA SAN ISIDRO
            </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Direccion
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            mi direccion xd
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Ventanillas
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            5 Ventanillas
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Num.  Clientes
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            5 Ventanillas
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Latitud
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            123123431134134°
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Longitud
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            -12312423445655°
          </Text>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  
});