import React from "react";
import {
  NativeBaseProvider
} from "native-base";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {MainScreen} from "./screens/MainScreen";
import {CatalogScreen} from "./screens/Catalog";
import {PhotosScreen} from "./screens/Photos";
import {AboutScreen} from "./screens/AboutScreen";

const Drawer = createDrawerNavigator();

/* Main app file */

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator >
            <Drawer.Screen name="Main" component={MainScreen} />
            <Drawer.Screen name="Catalog" component={CatalogScreen} initialParams={{ itemId: 0 }} />
            <Drawer.Screen name="Photos" component={PhotosScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

