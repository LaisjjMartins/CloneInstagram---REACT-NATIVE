import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import options from "../../../assets/options.png";
import like from "../../../assets/like.png";
import comment from "../../../assets/comment.png";
import send from "../../../assets/send.png";
import save from "../../../assets/save.png";

export function renderItem({item : post}){ 
    
    //function renderItem(props){ props.author
    //function renderItem({author}, {picture_url}, {likes}, {description}, {hashtags}, {place}){
    //Ele vai renderizar cada id, com oque esta aqui dentro! 
   // Fez a desestruturação para receber o item e pegar cada valor, separado, ou seja, um post por vez! 
    return(
        /* Primeiro View - Container que engloba tudo!! Depois cada um, tem um!*/
        /* Divide a parte de cima em duas views, uma para a parte esquerda (foto e nome), e outra para a direita(...)*/
        /*  IMAGEM ONLINE - O Image é um componente React Native, você passa o link pelo uri mas como temos o link em cima
               passamos com post.picture -- Tem que definir a largura e altura, senão ela não aparece!!*/
        /* IMAGEM COMPUTADOR - Importa a imagem em cima, com um apelido! */
        /* Componente que TouchableOpacity deixa o elemento clicavel*/
<View>  
       <View style={styles.postHeader}>

            <View style={styles.userInfo}> 
            <View style={styles.user}>
            <Image style={styles.photo} source={{uri: post.photo}}/>
            <Text style={styles.author}>{post.author}</Text>
            </View>
            <Text style={styles.place}>{post.place}</Text>
            </View>
            
            <View style={styles.postOptions}>
            <TouchableOpacity>
            <Image source={options} />
            </TouchableOpacity>
            </View>

        </View>
            <View> 
               <Image style={styles.picture_url} source={{uri: post.picture_url}} />
           </View>

        <View style={styles.footer}>
            <View style={styles.actions}>
                <View style={styles.esquerdaActions}>
                <TouchableOpacity style={styles.action}>
                    <Image source={like}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Image source={comment}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Image source={send}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity>
                    <Image source={save}/>
                </TouchableOpacity>
                </View>
            </View>
                

                <View>
                    <View style={styles.likes}>
                    <Text>Curtido por </Text>
                    <Text style={styles.authorLikes}>{post.author}</Text>
                    <Text> e </Text>
                    <Text style={styles.authorLikes}>outras {post.likes} pessoas </Text>
                    </View>

                    <View style={styles.description}>
                    <Text style={styles.authorLikes} >{post.author}</Text> 
                    <Text> {post.description} </Text>  
                    </View>
                    <Text style={styles.hashtags}>{post.hashtags}</Text>  
                 </View>
                 
                 
                 <TouchableOpacity>
                 <Text style={styles.comentario}>{post.comentario}</Text>  
                 </TouchableOpacity>

                <View>
                <Text style={styles.data}>{post.dia}</Text>  
                </View>
                 
              

         </View>
   </View>
    )
}
const styles=StyleSheet.create({
    postHeader: {
        flexDirection: "row", //linha
        justifyContent: "space-between", //espaço entre
        paddingHorizontal: 15,
        alignItems: "center",
        marginBottom: 10
    },
    user: {
        marginTop:5,
        flexDirection: "row",
    },
    author: {
        marginTop: 12,
        marginLeft: 8,
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        
    },
    photo:{
        marginTop: 8,
        width: 35,
       height: 35,
       borderRadius: 35/2
   },
    place: {
        fontSize: 12,
        color: "#000",
        marginLeft: 43,
        marginTop:-12
    },
    postOptions: {
        marginTop: 40
    },
        picture_url: {
        width: "100%",
        height: 400,
    },
    footer: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15
    },
    action: {
       marginRight: 8,
       
    },
    esquerdaActions: { 
        flexDirection: "row"
    },
    hashtags: {
        color: "#002D5E",
        marginBottom: 4
    },
    description:{
        color: "#000",
        lineHeight: 18,
        flex: 1,
        flexDirection: "row",
        
    },
    likes: {
        flex: 1,
        flexDirection: "row"

    },
    authorLikes: {
        color: "#000",
        fontWeight: "bold"
    },
    data: {
        marginBottom: 20,
        fontSize: 10,
        color: "#808080"
    },
    comentario:{
        color: "#808080",
        marginBottom: 2
    }

})