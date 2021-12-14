import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feed from "../../../src/pages/Feed/index";
import {User} from "../../../src/pages/User/index";
import {Pesquisa} from "../../../src/pages/Pesquisa/index";
import {Loja} from "../../../src/pages/Loja/index";
import {Reels} from "../../pages/Reels/index"
import Home from "../../../assets/iconsTab/Home.js";
import Lupa from "../../../assets/iconsTab/Lupa.js";
import ReelsIcon from "../../../assets/iconsTab/Reels.js";
import LojaIcon from "../../../assets/iconsTab/Loja.js";
import UserIcon from "../../../assets/user.png";


const Tab = createBottomTabNavigator();

export default function TabNav(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Feed" 
            component={Feed} 
            options= {{ headerShown: false,
                tabBarIcon: () => (
                <Home/>
                ), tabBarLabel:() => {return null},
            }}
                />
            <Tab.Screen 
            name="Pesquisa" 
            component={Pesquisa}
            options= {{ headerShown: false,
                tabBarIcon: () => (
                    <Lupa />
                    ), tabBarLabel:() => {return null},
            }}
            />
             <Tab.Screen 
            name="Reels" 
            component={Reels}
            options= {{ headerShown: false,
                tabBarIcon: () => (
                    <ReelsIcon />
                    ), tabBarLabel:() => {return null},
            }}
            />
             <Tab.Screen 
            name="Loja" 
            component={Loja}
            options= {{ headerShown: false,
                tabBarIcon: () => (
                    <LojaIcon />
                    ), tabBarLabel:() => {return null},
            }}
            />
            <Tab.Screen 
            name="User" 
            component={User}
            options= {{ headerShown: false,
                tabBarIcon: () => (
                    //<EvilIcons name="user" size={30} color="black" />
                    <Image source={UserIcon} style={{width:30, height:30, borderRadius: 20}}/>
                    ), tabBarLabel:() => {return null},
            }}
            />
        </Tab.Navigator>
    );
};