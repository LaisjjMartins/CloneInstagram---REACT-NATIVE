import React from "react";
import Login from "../pages/Login/index";
import {createStackNavigator} from "@react-navigation/stack";
import TabNav from "./TabNavigator";

//createStackNavigator faz a transição entre telas, tem que informar as telas. 
const Stack = createStackNavigator();

export default function Routes(){
   
    return(
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
            options={{
                headerShown: false,
            }}/>
            
            <Stack.Screen name="Feed" component={TabNav}
            options={{
                headerShown: false,
            }}/>
           
            
            </Stack.Navigator>
    );
}

    