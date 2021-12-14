import React from 'react';
import {View, FlatList} from "react-native";
import { Header } from '../../routes/Header';
import { renderItem } from '../../components/Posts';

export default function Feed(){

    const posts = [
        { id: "1",
        photo: "https://avatars.githubusercontent.com/u/89466610?v=4",
        author: "laisjjmartins",
        picture_url: "https://www.cidadeecultura.com/wp-content/uploads/2017/01/shutterstock_419530972-ilha-grande-lagoa-azul-bx.jpg",
        likes: "125",
        description: "Melhor lugar!!",
        hashtags: "#ilhagrande #melhorlugar",
        place: "Ilha Grande - Rio de Janeiro",
        comentario: "Ver todos os 45 comentários",
        dia: "Há 15 minutos"
        },
        { id: "2",
        photo: "https://avatars.githubusercontent.com/u/89466631?v=4",
        author: "ternisrodrigo",
        picture_url: "https://static8.depositphotos.com/1370441/837/i/600/depositphotos_8379682-stock-photo-surfer.jpg",
        likes: "150",
        description: "Bora Surfar!!",
        hashtags: "#surf #prancha",
        place: "Pero - Cabo Frio",
        comentario: "Ver todos os 20 comentários",
        dia: "Há 1 hora"
        },
        { id: "3",
        photo: "https://i.pinimg.com/736x/cd/c9/5c/cdc95c5b899c065431bc9eefe42f48f7.jpg",
        author: "larissamartins",
        picture_url: "https://odia.ig.com.br/_midias/jpg/2021/11/15/natal_imperial001-23574088.jpg",
        likes: "100",
        description: "Então é Natal...",
        hashtags: "#natal #fimdeano #papainoel",
        place: "Petrópolis - Cidade Imperial",
        comentario: "Ver todos os 60 comentários",
        dia: "Há 6 horas"
        },
        { id: "4",
        photo: "https://t1.ea.ltmcdn.com/pt/images/1/4/6/img_nomes_para_cachorro_husky_21641_orig.jpg",
        author: "huskyfamoso",
        picture_url: "https://www.anunciok.com/img/anuncios/cachorros-husky-siberiano-201709251653577669478300_L.jpg",
        likes: "354",
        description: "Nasceram. :)",
        hashtags: "#husky #dogs #neve",
        place: "Gramado - Rio Grande do Sul",
        comentario: "Adicione um comentário...",
        dia: "Há 16 horas"
        },
        { id: "5",
        photo: "https://image.flaticon.com/icons/png/512/93/93192.png",
        author: "restaurantebatata",
        picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5_EyXJ0e5DJxKVB_zdlvcft7htFT5pfXwQ&usqp=CAU",
        likes: "25",
        description: "Venha provar essa delicia!",
        hashtags: "#food #batata #sorriso",
        place: "Arpoador - Rio de Janeiro",
        comentario: "Ver todos os 2 comentários",
        dia: "12 de Dezembro "
        },
        { id: "6",
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Silvio_Santos_em_maio_de_2019.jpg",
        author: "silviosantos",
        picture_url: "https://i.pinimg.com/236x/e8/e7/f9/e8e7f926bb75da970b5231f6231aa4ff.jpg",
        likes: "10.052",
        description: "Olha o aviãozinho! ",
        hashtags: "#silvio #sbt #dinheiro",
        place: "São Paulo",
        comentario: "Ver todos os 3000 comentários",
        dia: "11 de Dezembro "
        }
    ];
    return(
        /* FlatList, é uma lista no react native. No data, é a lista de itens/informações que quer exibir na tela, ex: numero de links, a foto, o nome. Então 
        o data é um Array de coisas, ele é um const com o nome que quiser, que recebe um array com tudo oque precisa ter no objeto...O KeyExtractor é a 
        informação unica dele que tem no data.*/
        /* KeyExtractor === function key(item) { return item*id } */
        <View>
             <Header/>
        <FlatList data={posts} 
        renderItem={renderItem} 
        KeyExtractor={item => item.id} />         
     
       
        </View>
    );
};
