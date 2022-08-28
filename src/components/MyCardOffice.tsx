import React,{} from "react";
import { View,Text, StyleSheet,Image, SafeAreaView } from "react-native";
import IconBank from '../assets/Images/icon-bank.png'
interface Props {}
export const MyCardOffice = ({MyOffice}:Props)=>{
    return (
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around', padding:20,borderRadius:3,width:'100%', height:150}}>
            <SafeAreaView style={{paddingTop:25,paddingLeft:30, paddingRight:50 }}>
                <Text style={{fontSize:20,color:'#000000',fontWeight:"bold", margin:10}}>
                    {MyOffice.place}
                </Text>
            </SafeAreaView>
            <SafeAreaView style={{padding:15}}>
                <Image source={IconBank}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    
});