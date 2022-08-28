import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useEffect} from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import IconBanck from '../assets/Images/icon-bank.png';
import { RootStackParams } from '../navigator/StackNavigator';
interface Props extends StackScreenProps<RootStackParams, 'OfficeScreen'>{}
export const OfficeScreen = ({latitude,longitude}:Props) => {
  const [objOffice,setobjOffice] = useState({});
  const GetOffice = async ()=>{
    let url = new URL('https://bbva20220828000830.azurewebsites.net/api/Office/LatLon');
    let body = {
      latitude:latitude,
      longitude:longitude
    }
    console.log(body);
    /* url.search = new URLSearchParams(body).toString();
    let res= await fetch(url,{
      method:'get',
      headers:{}
    }).then(res=>res.json())
    .then(res=>{
      setobjOffice(res);
      console.log(res);
    })
    .catch(error=>console.log(error)); */
  }
  useEffect(()=>{
    GetOffice();
  },[]);
  return (
    <View>
        <SafeAreaView style={{alignItems:'center', marginTop:40}}>
            <Image source={IconBanck} />
            <Text style={{fontSize:25, color:'#000000'}}>
              Banco BBVA
            </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Direccion
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            {
              objOffice.place ?? '-'
            }
          </Text>
        </SafeAreaView>
        <SafeAreaView style={{paddingTop:40,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:25, color:'#000000',fontWeight:'bold',marginLeft:40}}>
            Ventanillas
          </Text>
          <Text style={{fontSize:25, color:'#000000',marginRight:40}}>
            {
              latitude
            }
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