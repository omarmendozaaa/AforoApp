import React,{} from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { View,Text, StyleSheet,Image, SafeAreaView, Button, Alert } from "react-native";
import { RootStackParams } from '../navigator/StackNavigator';
import IconBank from '../assets/Images/icon-bank.png'
interface Props extends StackScreenProps<RootStackParams>{}
export const MyCardOffice = ({MyOffice,navigation}:Props)=>{
    return (
        <View style={{display:'flex', padding:20,borderRadius:3}}>
            <SafeAreaView style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <SafeAreaView style={{paddingTop:25,paddingLeft:30, paddingRight:40 }}>
                    <Text style={{fontSize:20,color:'#000000',fontWeight:"bold", margin:10}}>
                        {MyOffice.place}
                    </Text>
                </SafeAreaView>
                <SafeAreaView onStartShouldSetResponder={()=>navigation.navigate('OfficeScreen',{latitude:'a',longitude:'f'})} style={{padding:15}}>
                    <Image source={IconBank}/>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={{flexDirection:'row',flex:1, marginBottom:0,display:'flex', justifyContent:'flex-end'}}>
                <Text style={{color:'#000000',fontWeight:"bold",fontSize:20}}>{`${MyOffice.checkInTime} - ${MyOffice.checkOutTime}`}</Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    
});