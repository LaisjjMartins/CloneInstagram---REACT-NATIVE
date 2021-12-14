import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native"; 
import { addValidStylePropTypes } from "react-native/Libraries/StyleSheet/StyleSheetValidation";
export function User(){
  const navigation =useNavigation();
    return(
        <SafeAreaView>
        <Text>
          User
        </Text>

        <TouchableOpacity style={styles.sair} onPress={()=> navigation.navigate("Login")}>
         <Text style={styles.Textsair}>SAIR</Text> 
        </TouchableOpacity>
        </SafeAreaView>
    );
};
const styles=StyleSheet.create({
sair:{
  justifyContent: "center",
  marginLeft:280
  

},
Textsair: {
  fontSize:18,
  textAlign: "center"
 
}
})