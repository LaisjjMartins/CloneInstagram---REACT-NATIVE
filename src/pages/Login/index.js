import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Platform} from "react-native";
import logo from "../../../assets/logo.png";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" translucent={false}/>
            <Image style={styles.logo} source={logo}/>
            
            <TextInput style={styles.input} 
            placeholder="Telefone, nome de usuário ou senha"
            />

            <View style={styles.olhosenha}>
            <TextInput style={styles.inputsenha}
            placeholder="Senha" 
            />
            <View style={styles.iconsenha}>
            <MaterialCommunityIcons name="eye-off-outline" size={24} color={"#E0E0E0"}/>
            </View>
            </View>
            
            

            <View style={styles.containerOpcao}>
                <TouchableOpacity>
                    <Text style={styles.opcaoText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
           
            <TouchableOpacity style={styles.login} onPress={()=> navigation.navigate("Feed")}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
          
            <View style={styles.containerDivisor}>
              <View style={styles.divisor}/>
                  <Text style={styles.opcao}>OU</Text>
              <View style={styles.divisor}/>
          </View>

          <TouchableOpacity style={styles.containerLogin} onPress={()=> navigation.navigate("Feed")}>
              <FontAwesome5 name="facebook" size={25} color="#399fff"/>
              <Text style={styles.facebook}>Continuar como Lais Martins</Text>
          </TouchableOpacity>

            <View style={styles.divisorfinal}/>

            <View style={styles.containerCadastro}>
            <Text style={styles.conta}>Não tem uma conta?</Text>
            <TouchableOpacity>
            <Text style={styles.cadastro}> Cadastre-se</Text>
            </TouchableOpacity>
            
             </View>
       

               
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: "center",
        width:"100%",
        height: "100%",
    },
    logo:{
        width:"42%",
        height: 50,
        marginTop: Platform.OS == "android" ? "13%" : "20%",
        marginBottom:Platform.OS == "android" ? "13%" : "15%"
    },
    input:{
        backgroundColor: "#F4F3F3",
        width: "90%",
        height: 42,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        marginBottom:8
    },
    inputsenha:{
        backgroundColor: "#F4F3F3",
        width: "90%",
        height: 40,
        marginBottom:8
    },
    containerOpcao: {
        width: "90%",
        alignItems: "flex-end"
    },
    opcaoText:{
        color:"#0B9DFE",
        fontWeight: "bold"
    },
    login:{
        marginTop: "5%",
        backgroundColor: "#5ACCFE",
        width: "90%",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    loginText: {
    color: "#FFF",
    fontSize: 17,
   
    },
    containerLogin:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: "15%"
    },
    facebook:{
        color: "#0B9DFE",
        paddingLeft: 8,
        fontSize: 15,
        fontWeight: "bold"
    },
    containerDivisor: {
        marginTop: "10%",
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "center"
    },
    divisor:{
        width: "45%",
        height: 2,
        backgroundColor: "#EFEDED",
        borderRadius: 5
    },
    opcao:{
        marginHorizontal: "3%"
    },
    divisorfinal:{
        marginTop: "31%",
        width: "100%",
        height: 2,
        backgroundColor: "#EFEDED",
        borderRadius: 5
    },
    containerCadastro:{
        marginTop:22,
        flexDirection:"row",
        
        
    },
    conta:{
        color: "#969696"
    },
    cadastro:{
        color: "#0B9DFE",
        fontWeight: "bold"
    },
    olhosenha:{
        flexDirection: "row",
        backgroundColor: "#F4F3F3",
        width: "90%",
        height: 42,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        marginBottom:8        
    },
    iconsenha: {
        marginTop:8
    }
})