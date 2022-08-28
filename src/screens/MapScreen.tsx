import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect,useState} from 'react';
import { View, Button,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Map } from '../components/Map';
import { MyCardOffice } from '../components/MyCardOffice';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'MapScreen'>{}

export const MapScreen = ({navigation}:Props) => {
  const [officeList, setOfficeList] = useState([]);
  const GetOffice=async()=>{
    let res = await fetch('https://bbva20220828000830.azurewebsites.net/api/Office',{
      method:'GET',
      headers:{}
    }).then(res=>res.json())
    .then((res)=>{
      setOfficeList(res);
    })
    .catch(error=>console.log(error));
    return res;
  }
  useEffect(()=>{
    GetOffice();
  },[]);
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {
          officeList.map((item,index)=><MyCardOffice key={index} MyOffice={item} eventClick={()=>navigation.navigate('OfficeScreen',{latitude:0,longitude:0})}></MyCardOffice> )
        }
      </ScrollView>
         {/*  <Map /> */}
        {/* <Button title = "Go to Oficina" onPress={()=>navigation.navigate('OfficeScreen',{id:0})}/> */}
    </View>
  );
};

