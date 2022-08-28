import React,{} from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { View,Text, StyleSheet,Image, SafeAreaView, Button, Alert, TouchableOpacity } from "react-native";
import { RootStackParams } from '../navigator/StackNavigator';
import IconBank from '../assets/Images/icon-bank.png'

interface Props extends StackScreenProps<RootStackParams>{}
export const MyCardOffice = ({MyOffice}:Props)=>{
    const oficina = async () => {
        // let url = new URL('https://bbva20220828000830.azurewebsites.net/api/Office/state');
            let body = {
                latitude: MyOffice.latitude,
                longitude: MyOffice.longitude,
            };
            let url = new URL('https://bbva20220828000830.azurewebsites.net/api/Office/state?latitude='+MyOffice.latitude+'&longitude='+MyOffice.longitude);
            console.log(url);
            // url.search = new URLSearchParams(body).toString();
            // let res = await fetch(url,{
            //     method:'get',
            //     headers:{}
            // }).then(res=>res.json())
            // .catch(error=>console.log(error));
            // console.log(res);
            // Alert.alert('Afuera: '+res.cantidadAfuera+'{\n}'+'Dentro: '+res.cantidadAdentro);
    }

    return (
        <TouchableOpacity style={styles.card_style} onPress={async () => {
            let body = {
                latitude: MyOffice.latitude,
                longitude: MyOffice.longitude,
            };
            let url = 'https://bbva20220828000830.azurewebsites.net/api/Office/state?latitude='+MyOffice.latitude+'&longitude='+MyOffice.longitude;
            console.log(url);
            // url.search = new URLSearchParams(body).toString();
            let res = await fetch(url,{
                method:'get',
                headers:{}
            }).then(res=>res.json())
            .catch(error=>console.log(error));
            console.log(res);
            // Alert.alert(
            //     "Alert Title",
            //     "My Alert Msg",
            //     [
            //       {
            //         text: "Cancel",
            //         onPress: () => console.log("Cancel Pressed"),
            //         style: "cancel"
            //       },
            //       { text: "OK", onPress: () => console.log("OK Pressed") }
            //     ]
            // );
            Alert.alert('Aforo: '+MyOffice.capacity,'Fuera de Oficina: '+res.cantidadAfuera+'\nEn la oficina: '+res.cantidadAdentro);
        }}>
            <SafeAreaView style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <SafeAreaView style={{paddingTop:25,paddingLeft:30, paddingRight:40 }}>
                    <Text style={{fontSize:20,color:'#000000',fontWeight:"bold", margin:10}}>
                        {MyOffice.place}
                    </Text>
                </SafeAreaView>
                <SafeAreaView style={{padding:15}}>
                    <Image source={IconBank}/>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={{flexDirection:'row',flex:1, marginBottom:0,display:'flex', justifyContent:'flex-end'}}>
                <Text style={{color:'red',fontWeight:"bold",fontSize:15}}>{`${MyOffice.checkInTime} - ${MyOffice.checkOutTime}`}</Text>
            </SafeAreaView>
        {/* </View> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card_style:{
        display:'flex',
        padding:20,
        borderWidth:1,
        borderRadius:3,
        borderColor:'#0859AF'
    },
});