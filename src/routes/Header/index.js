import React from "react";
import {Image, TouchableOpacity, View, SafeAreaView, StyleSheet} from "react-native"; 
import logo from "../../../assets/logo.png";
import adicionar from "../../../assets/adicionar.png";
import direct from "../../../assets/Direct.png";
import like from "../../../assets/like.png";

export function Header(){
   
    return(
         <SafeAreaView >
             <View style={styles.header} >

                <View style={styles.logo}>
                <Image style={{width: 125, height: 35}} source={logo} />
                </View>
            
                

                <TouchableOpacity style={styles.add}>
                <Image  source={adicionar} style={{width: 30, height: 22}} resizeMode="contain"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.like}>
                <Image  source={like} style={{width: 30, height: 22}} resizeMode="contain"/>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.direct}>
                <Image source={direct} style={{width: 30, height: 22}} resizeMode="contain"/>
                </TouchableOpacity>
            
            </View>
           

         </SafeAreaView> 
    );
}
const styles=StyleSheet.create({
    header:{
    flexDirection: "row",
    },
    logo:{
        marginLeft:20,        
        marginTop: 12,
        marginBottom: 5
        
    },
    add:{
        marginLeft: 130,
        marginTop: 14,
       
    },
    like:{
        marginLeft: 20,
        marginTop: 14
    },
    direct:{
        marginTop: 14,
        marginLeft: 20,
    }
})